import express from "express"
import protectRoute from "../middleware/protectRoute.js";
import { getFilteredUsers, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsers);
router.get("/:searchQuery", protectRoute, getFilteredUsers);

export default router;