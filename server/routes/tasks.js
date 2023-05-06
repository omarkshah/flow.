import express from "express";
import { getTasks, getSingleTask } from "../controllers/tasks.js";
import { verifyToken } from "../middleware/auth.js";

const router = express();


//GET POSTS route
router.post("/", verifyToken, getTasks);


//Get single post route
router.post("/task", verifyToken, getSingleTask)

router.post("")

export default router