import express, { Application } from "express";
import { mongoServer } from "./config/db";
import UserRoutes from "./routes/UserRoutes";
const app: Application = express();
const port: Number | any = process.env.SERVER_PORT || 4000;
// database
mongoServer();
// Json body parser
app.use(express.json());
// route
app.use("/api", UserRoutes);
// healthcheck
app.use("/ping", (req, res, next) => {
  res.status(200).json({ msg: "working" });
});
// error handling
app.use((req, res, next) => {
  const error = new Error("route not found");
  return res.status(404).json({ msg: error });
});

app.listen(4000, () => {
  console.log(`server running on http://localhost:${port}/`);
});
