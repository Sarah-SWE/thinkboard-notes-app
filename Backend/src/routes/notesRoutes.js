import express from "express";
import {
  updateNote,
  deleteNote,
  addNote,
  getAllNotes,
  getNoteById,
} from "../controllers/notesControllers.js";
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", addNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
export default router;
