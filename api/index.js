import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import router from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.routes.js";
import path from "path";
dotenv.config();

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

const __dirname = path.resolve();
const app = express();
app.use(cookieParser());
app.listen(3000, () => {
  console.log("server is running!!!");
});
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", router);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
}); //middleware :the server send status code to browser
