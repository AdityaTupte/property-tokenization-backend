import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/users.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verify } from "node:crypto";
import { verifyJWT } from "../middlewares/auth.iddleware.js";

const router = Router()


router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)

export default router