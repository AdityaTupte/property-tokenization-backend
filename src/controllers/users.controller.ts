import { prisma } from "../prismaclient.js";
import type { MulterFiles } from "../types&interface/multer.interface.js";
import type {
  RefreshTokenPayload,
  RegisterUserBody,
} from "../types&interface/user.types&interface.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsyncHandler.js";
import type { Request, Response } from "express";
import { uploadOnCloudinary } from "../utils/Cloudianry.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { UserDb } from "../models/usermethods.js";
import type { User } from "../generated/prisma/client.js";
import type { AuthRequest } from "../middlewares/auth.iddleware.js";
import jwt from "jsonwebtoken";
import fs from "fs";
import { options } from "../utils/cookiesOption.js";
import bcrypt from "bcrypt";

const generateAccessTokenAndRefreshToken = async (
  user: Pick<User, "id" | "email" | "fullName" | "username">
): Promise<{ accessToken: string; refreshToken: string }> => {
  try {
    const accessToken = UserDb.user.generateAccessToken(user);
    const refreshToken = UserDb.user.generateRefreshToken(user);

    const response = await UserDb.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken: refreshToken,
      },
    });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerUser = asyncHandler(
  async (req: Request<{}, {}, RegisterUserBody>, res: Response) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const { fullName, email, username, password } = req.body;

    if (
      [fullName, email, username, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new ApiError(400, "All Field are required");
    }

    const existedUser = await prisma.user.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
      select: {
        username: true,
        email: true,
      },
    });

    const files = req.files as MulterFiles;

    let avatarLocalPath;

    if (req.files && Array.isArray(files.avatar) && files.avatar.length > 0) {
      avatarLocalPath = files?.avatar[0]?.path;
    }

    let coverImageLocalPath;

    if (
      req.files &&
      Array.isArray(files.coverImage) &&
      files.coverImage.length > 0
    ) {
      coverImageLocalPath = files?.coverImage[0]?.path;
    }

    if (existedUser) {
      fs.unlinkSync(avatarLocalPath as string);
      fs.unlinkSync(coverImageLocalPath as string);
      throw new ApiError(400, "User with email or username already exists");
    }

    // const files = req.files as MulterFiles;

    // let avatarLocalPath;

    // if (req.files && Array.isArray(files.avatar) && files.avatar.length > 0) {
    //   avatarLocalPath = files?.avatar[0]?.path;
    // }

    if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar file is required");
    }

    // let coverImageLocalPath;

    // if (
    //   req.files &&
    //   Array.isArray(files.coverImage) &&
    //   files.coverImage.length > 0
    // ) {
    //   coverImageLocalPath = files?.coverImage[0]?.path;
    // }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    if (!avatar) {
      throw new ApiError(400, "Avatar file is required asdrjnb");
    }

    let coverimage;
    if (coverImageLocalPath) {
      coverimage = await uploadOnCloudinary(coverImageLocalPath);
    }

    const user = await UserDb.user.create({
      data: {
        fullName: fullName,
        username: username.toLowerCase(),
        email: email,
        password: password,
        avatar: avatar.url,
        coverImage: coverimage?.url || "",
      },
    });

    const createdUser = await UserDb.user.findFirst({
      where: {
        id: user.id,
      },
      omit: {
        password: true,
        refreshToken: true,
      },
    });

    if (!createdUser) {
      throw new ApiError(
        500,
        "Something went wrong while registering the user"
      );
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User registered Successfully"));
  }
);

const loginUser = asyncHandler(
  async (
    req: Request<
      {},
      {},
      Pick<RegisterUserBody, "email" | "username" | "password">
    >,
    res: Response
  ) => {
    const { email, username, password } = req.body;

    if (!username && !email) {
      throw new ApiError(400, "username or email is required");
    }

    const user = await UserDb.user.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
      select: {
        email: true,
        fullName: true,
        username: true,
        password: true,
        id: true,
      },
    });

    if (!user) {
      throw new ApiError(404, "User does not exist");
    }

    const isPasswordvalid = await UserDb.user.isPasswordcorrect(
      password,
      user.password
    );

    if (!isPasswordvalid) {
      throw new ApiError(401, "Invalid user credentials");
    }

    const { accessToken, refreshToken } =
      await generateAccessTokenAndRefreshToken(user);

    const loggedInUser = await UserDb.user.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
      omit: {
        password: true,
        refreshToken: true,
      },
    });

    options;

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInUser,
            accessToken,
            refreshToken,
          },
          "user logged In Successfully"
        )
      );
  }
);

const logoutUser = asyncHandler(async (req: AuthRequest, res) => {
  await UserDb.user.update({
    where: {
      id: req.user?.id,
    },
    data: {
      refreshToken: undefined,
    },
  });

  options;

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

const refereshAccessToken = asyncHandler(
  async (req: Request, res: Response) => {
    const incomingrefreshToken =
      req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingrefreshToken) {
      throw new ApiError(401, "unauthorized request");
    }

    try {
      const decodedToken = jwt.verify(
        incomingrefreshToken,
        process.env.REFRESH_TOKEN_SECRET!
      ) as RefreshTokenPayload;

      const user = await UserDb.user.findUnique({
        where: {
          id: decodedToken?.id,
        },
      });

      if (!user) {
        throw new ApiError(401, "Invalid refresh token");
      }

      if (incomingrefreshToken !== user.refreshToken) {
        throw new ApiError(401, "Refresh token is expired or used");
      }

      options;

      const { accessToken, refreshToken } =
        await generateAccessTokenAndRefreshToken(user);

      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
          new ApiResponse(
            200,
            { accessToken, refreshToken: refreshToken },
            "Access token refreshed"
          )
        );
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new ApiError(401, "Refresh token has expired");
      }

      if (error instanceof jwt.JsonWebTokenError) {
        throw new ApiError(401, "Invalid refresh token");
      }

      if (error instanceof ApiError) {
        throw error;
      }

      throw new ApiError(500, "Internal server error");
    }
  }
);

const changeCurrentPassword = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { oldPassword, newPassword } = req.body;

    const user = await UserDb.user.findUniqueOrThrow({
      where: {
        id: req.user?.id,
      },
      select: {
        password: true,
      },
    });

    const isPasswordvalid = await UserDb.user.isPasswordcorrect(
      oldPassword,
      user.password
    );

    if (!isPasswordvalid) {
      throw new ApiError(400, "Invalid old password");
    }

    const newEncryptedPassword = await bcrypt.hash(newPassword, 10);

    await UserDb.user.update({
      where: {
        id: req.user?.id,
      },
      data: {
        password: newEncryptedPassword,
      },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Password Changed Successfully"));
  }
);

export {
  registerUser,
  loginUser,
  logoutUser,
  refereshAccessToken,
  changeCurrentPassword,
};
