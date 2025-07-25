import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitUI";
// import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import { axiosInstance } from "../lib/axios";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // const res = await fetch("http://localhost:8000/api/notes");
        // const data = await res.json();

        // const res = await axios.get("http://localhost:8000/api/notes");
        const res = await axiosInstance.get("/notes");
        setNotes(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error in note fetching");
        console.log(error);
        if (error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("fail to load notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">loading...</div>
        )}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
