import dotenv from "dotenv";
import app from "./app.js";
import db from "./db/db.js";
import { initializeNLP } from "./config/nlp.js";

dotenv.config();

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    console.log("Connecting to MySQL...");
    await db;
    console.log("MySQL connection successful.");

    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error.message);
    process.exit(1);
  }
};

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1);
});

startServer();

(async () => {
  await initializeNLP();
})();
