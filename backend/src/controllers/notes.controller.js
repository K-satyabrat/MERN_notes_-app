import Note from "../models/notes.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    return res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    return res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });

    return res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNotes(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export { updateNotes };
