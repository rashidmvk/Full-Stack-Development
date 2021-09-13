import express from "express";
import { getEmployeeDetails } from "../handlers/employeeHandler";

const employeeRouter = express.Router();

//route to employeeHandler
employeeRouter.get("/employees", getEmployeeDetails);

export default employeeRouter;
