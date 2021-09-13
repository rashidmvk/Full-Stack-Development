import { Request, Response } from "express";
import { getApiService } from "../services/services";

export async function getEmployeeDetails(req: Request, res: Response) {
  try {
    //function call to get the Employee Information
    const items = await new getApiService().getEmployeeInfo();
    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
}
