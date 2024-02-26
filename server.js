import express from "express";
import "./config.js";
import "./db-connection.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// get one user
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
