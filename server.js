import express from "express";
import "./config.js";
import "./db-connection.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();
const port = process.env.PORT || 5000;

// middleware to use json
app.use(express.json());

// Routes
app.use("/users", usersRouter);

// server
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
