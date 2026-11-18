import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
// import toast from "react-hot-toast";

const App = () => {
  return (
    <div
      className="relative isolate min-h-screen w-full bg-white"
      data-theme="nord"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#5E81AC55_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
