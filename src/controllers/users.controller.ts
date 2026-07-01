import { prisma } from "../prismaclient.js";
import type { MulterFiles } from "../types/multer.interface.js";
import type { RegisterUserBody } from "../types/user.types.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsyncHandler.js";
import type { Request, Response } from "express";
import { uploadOnCloudinary } from "../utils/Cloudianry.js";
import { ApiResponse } from "../utils/ApiResponse.js";

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

    if (existedUser) {
      throw new ApiError(400, "User with email or username already exists");
    }

    const files = req.files as MulterFiles;

    // const avatarLocalPath = files?.avatar[0]?.path;

    let avatarLocalPath;

    if (req.files && Array.isArray(files.avatar) && files.avatar.length > 0) {
      avatarLocalPath = files?.avatar[0]?.path;
    }

    if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar file is required");
    }

    let coverImageLocalPath;

    if (
      req.files &&
      Array.isArray(files.coverImage) &&
      files.coverImage.length > 0
    ) {
      coverImageLocalPath = files?.coverImage[0]?.path;
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    if (!avatar) {
      throw new ApiError(400, "Avatar file is required");
    }

    let coverimage;
    if (coverImageLocalPath) {
      coverimage = await uploadOnCloudinary(avatarLocalPath);
    }

    const user = await prisma.user.create({
      data: {
        fullName: fullName,
        username: username.toLowerCase(),
        email: email,
        password: password,
        avatar: avatar.url,
        coverImage: coverimage?.url || "",
      },
    });

    const createdUser = await prisma.user.findFirst({
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

export { registerUser };
