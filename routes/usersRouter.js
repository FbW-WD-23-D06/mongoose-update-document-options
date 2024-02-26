import express from "express";
import { addUser, getAllUser, getUser } from "../controller/userController.js";

const usersRouter = express.Router();

usersRouter
  .get("/", getAllUser)
  .post("/", addUser)
  .get("/:userId/:name", getUser);

export default usersRouter;
