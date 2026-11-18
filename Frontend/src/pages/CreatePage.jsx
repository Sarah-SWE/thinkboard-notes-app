import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import toast from "react-hot-toast";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }
    setIsLoading(true);
    try {
        await api.post('/notes',{title,content})
        toast.success('Note Created Successfully! ')
        navigate('/')
    } catch (error) {
      console.log("Something went wrong! ",error);
      if(error.response?.status===429){
        toast.error("Slow down! You're creating notes too fast",{duration:4000,icon:'💀'})
      }else{
      toast.error("Failed to create note")
      }

    }finally{
      setIsLoading(false)
    }
  };
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/"
            className="btn btn-ghost mb-6 transition-all duration-800 hover:rounded-4xl"
          >
            <ArrowLeftIcon className="size-5" />
            Back to Home
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4 text-primary font-bold">
                Create New Note
              </h2>
              <form className=" " onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label block mb-3">
                    <span className="label-title">Note Title:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="input input-primary rounded-4xl w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label block">
                    <span className="label-title">Your description:</span>
                  </label>
                  <input
                    className="input input-primary block w-full rounded-4xl my-2"
                    placeholder="Description"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="card-actions justify-end">
                  <button
                    type="button"
                    className="btn  btn-primary btn-sm rounded-4xl mt-5 px-6 "
                    disabled={isLoading}
                    style={{ color: isLoading ? "gray" : "white" }}
                    onClick={handleSubmit}
                  >
                    {isLoading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
