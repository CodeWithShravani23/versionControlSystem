import express from "express";
import {createIssue,updateIssueById,deleteIssueById,getIssueById,getAllIssue}
from "../controllers/issueController.js";
import verify from "../middleWares/authMiddleware.js";

const issueRouter = express.Router();


issueRouter.post("/create", verify,createIssue);
issueRouter.put("/update/:id", verify,updateIssueById);
issueRouter.delete("/delete/:id",verify, deleteIssueById);
issueRouter.get("/all", getAllIssue);
issueRouter.get("/:id", getIssueById);

export default issueRouter;