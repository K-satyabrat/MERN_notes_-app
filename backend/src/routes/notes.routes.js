import express from "express";
import {
  createNote,
  deleteNotes,
  getAllNotes,
  getNoteById,
  updateNotes,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/create", createNote);
router.put("/update/:id", updateNotes);
router.delete("/delete/:id", deleteNotes);

export default router;
