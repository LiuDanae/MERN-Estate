import express from "express";
import test from "../controller/user.controller.js";

const router = express.Router();
router.get("/test", test);
export default router; //默认导出的ES模块可以随意命名
