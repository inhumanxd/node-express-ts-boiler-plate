import { Router } from "express";

const testRoutes = Router();

testRoutes.get("/", async (req, res) => {
  res.send("Hello from Test!");
});

export { testRoutes };
