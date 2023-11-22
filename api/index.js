import express, { json } from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import authRouter from "./controller/auth.controller.js";

mongoose
  .connect(
    "mongodb+srv://jumptiger:jumptiger@dan.dozyhhi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connect to mongoosse");
  })
  .catch((err) => {
    console.log("error");
  });

const app = express();
app.listen(3000, () => {
  console.log("服务器执行了!!!");
});
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internet server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
