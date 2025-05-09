import express from "express";
import connectToDb from "./Database/Database.js";
import userRouter from "./Router/UserRouter.js";
import CommentRouter from "./Router/CommentRouter.js";
import Postrouter from "./Router/PostRouter.js";
import MessageRouter from "./Router/MessageRouter.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
import { app,server } from "./Socket/Socketio.js";
import cors from "cors";

connectToDb();




cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  
  api_key: process.env.CLOUDINARY_API_KEY,        
  api_secret: process.env.CLOUDINARY_API_SECRET,  
})


app.use(express.json());


app.use(cors());

app.use("/user", userRouter);
app.use("/item", Postrouter);
app.use("/comment",CommentRouter)
app.use("/messageuser",MessageRouter)


app.get("/", (req, res) => {
  res.send("Hello World");
});


server.listen(3000, () => {
  console.log("Server running on port 4000");
});