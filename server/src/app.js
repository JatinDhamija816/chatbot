import express from "express";
import cors from "cors";
import message from "./routes/message.route.js";

const app = express();

const isProduction = process.env.NODE_ENV === "production";

const allowedOrigins = isProduction
  ? ["https://chatbot-tawny-tau.vercel.app"]
  : ["http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use("/api/v1/message", message);

export default app;
