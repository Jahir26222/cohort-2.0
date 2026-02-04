import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Note = () => {
  const [note, setNote] = useState([]);

const navigate = useNavigate()

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("https://cohort-2-0-scg1.onrender.com/api/notes");
        // console.log(res.data.AllNote)
        setNote(res.data.AllNote);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotes();
  }, []); 

  // DELETE HANDLER
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://cohort-2-0-scg1.onrender.com/api/notes/${id}`);

      setNote((prevNotes) =>
        prevNotes.filter((note) => note._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      {note?.map((note) => (
        <div className="card" key={note._id}>
          <div className="title">
            <h2>{note.title}</h2>
          </div>

          <div className="desc">
            <p>{note.description}</p>
          </div>

          <div className="btn">
            <button onClick={()=>navigate(`update/${note._id}`)}>Update</button>
            <button onClick={() => handleDelete(note._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Note;
