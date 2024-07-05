import express from 'express';
import prisma from './lib/prisma.js'; // Adjust the path as necessary
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from 'cookie-parser';
import cors from "cors"
const app = express();

app.use(cors({origin: process.env.CLIENT_URL , credentials: true}));
app.use(express.json());
app.use(cookieParser());




app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

const port = process.env.PORT || 8000 ;

app.listen(port, () => {
    console.log("Server is Running");
});
