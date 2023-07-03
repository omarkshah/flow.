import express from "express";
import { getTasks, getSingleTask, deleteTask } from "../controllers/tasks.js";
import { verifyToken } from "../middleware/auth.js";

const router = express();


//GET POSTS route
router.get("/:userId/tasks", getTasks);


//Get single post route
router.post("/:taskId/task", getSingleTask);

router.delete("/:userId/:taskId/delete", deleteTask);


export default router
