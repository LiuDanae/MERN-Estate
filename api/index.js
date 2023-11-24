import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import router from "./routes/auth.routes.js";

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
  console.log("server is running!!!");
});
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", router);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
}); //middleware :the server send status code to browser
