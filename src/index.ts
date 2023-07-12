import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import routes from "./routes";
import { handle } from "./helpers/ErrorHandler";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

app.use(handle);

const run = async () => {
  app.listen(process.env.PORT, async () => {
    console.info(`Server 🚀 started running in ${process.env.NODE_ENV} on PORT: ${process.env.PORT}!`);

    await connectDB();
  });
};

run().catch((err: Error) => {
  console.error(err);
});

process.on("uncaughtException", (error, origin) => {
  console.info(origin);
  console.error(error);
  process.exit(1);
});
