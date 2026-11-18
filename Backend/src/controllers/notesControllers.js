import Note from "../models/Note.js";

// fetch all notes
export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({createAt:-1}); //newest first
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getALlNotes() ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
// fetch single note
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found!" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.log("Error in getNoteById() ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// create a note
export async function addNote(req, res) {
  try {
    const { title, content } = req.body;
    console.log("Received data:", title, content);

    const newNote = new Note({ title, content });
    const savedNewNote = await newNote.save();

    console.log("Saved successfully:", savedNewNote);
    res.status(201).json(savedNewNote);
  } catch (error) {
    console.error("Error in addNote():", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
// delete a note
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) {
      return res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json({ message: "Deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
// update a note
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      },
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found!" });
    }
    res.status(200).json({ message: "Updated successfully!" });
  } catch (error) {
    console.error("Error in addNote():", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
