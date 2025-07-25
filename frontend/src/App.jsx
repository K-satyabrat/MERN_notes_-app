import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
