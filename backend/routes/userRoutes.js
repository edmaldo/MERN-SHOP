import express from "express"
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updatedUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/").post(registerUser).get(getUsers)
router.post("/login", authUser)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updatedUserProfile)
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router
