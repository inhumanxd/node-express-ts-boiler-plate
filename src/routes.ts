import { Router } from "express";
import { testRoutes } from "./modules/test";

const routes = Router();

routes.use("/test", testRoutes);

routes.get("/", (req, res) => {
  res.send("Hello!");
});

export = routes;
