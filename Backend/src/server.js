import express from "express";
import cors from "cors";
import "dotenv/config";

import rateLimiter from "./middleware/ratelimiter.js";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);


connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server started on PORT:5000");
  });
});
