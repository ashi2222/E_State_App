import express from "express";
import { 
    getChats , getChat , addChat , readChat, deleteChat
} from "../controllers/chat.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/" ,verifyToken ,  getChats);
router.get("/:id" , verifyToken ,  getChat); 
router.post("/" , verifyToken , addChat);
router.put("/read/:id" , verifyToken , readChat);
//comment added 
router.delete("/:id" , verifyToken ,  deleteChat); 

export default router;