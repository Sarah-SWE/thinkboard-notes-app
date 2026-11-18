import Mongoose from "mongoose";

// 1-create a schema
const noteSchema = Mongoose.Schema(
    {
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },  
},{timestamps:true});// 2-model of that schema
const Note = Mongoose.model("Note", noteSchema);
export default Note;