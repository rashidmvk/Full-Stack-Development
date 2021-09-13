import express from "express";
import { baseUrl } from "../utilities/constants";
const router = express.Router();

//route file can be imported here
import employeeRouter from "../routes/employees";

//route to middleware
router.use(baseUrl, employeeRouter);

export default router;
