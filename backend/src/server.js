import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import notesRouter from "./routes/notes.routes.js";
import cors from "cors";
import rateLimiter from "./middlewares/rateLimiter.js";

dotenv.config();
// connectDB()
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/notes", rateLimiter, notesRouter);

app.get("/", (req, res) => {
  res.send("Hello from Express ES6 server!");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
