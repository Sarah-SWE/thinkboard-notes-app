import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
const NoteDetailsPage = () => {
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        toast.error("Failed to fetch the note");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDeleteNote = async () => {
    if (!confirm("Are you really want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Something went error ", error);
      toast.error("Failed to delete this note");
    }
  };
  const handleSaveBtn = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please Add a title or content");
      return;
    }
    setIsSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Something went error ", error);
      toast.error("Failed to update this note");
    } finally {
      setIsSaving(false);
    }
  };
  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="container mx-auto  px-8 py-5 ">
        <div className="max-w-2xl mx-auto ">
          <div className="flex items-center justify-between mb-6 ">
            <Link to="/" className="btn btn-ghost rounded-4xl btn-sm">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleDeleteNote}
              className="btn btn-error btn-outline rounded-4xl btn-sm"
            >
              <Trash2Icon className="size-4" />
              Delete Note
            </button>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label block">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-primary w-full rounded-4xl mt-3"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label block">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here ... "
                  className="w-full textarea rounded-2xl textarea-primary h-32"
                  value={note.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </div>
              <div className="card-actions">
                <button
                  className="btn btn-primary btn-sm ms-auto rounded-4xl"
                  disabled={isSaving}
                  onClick={handleSaveBtn}
                >
                  {isSaving ? "Saving..." : "Save changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailsPage;
