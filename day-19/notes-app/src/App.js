import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      content: note.content,
      date: note.date,
      status: "open"
    };
    setNotes((prev) => [...prev, newNote]);
  };
  const deleteNote = (id) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };
  const toggleStatus = (id) => {
    const updated = notes.map((n) =>
      n.id === id
        ? { ...n, status: n.status === "open" ? "closed" : "open" }
        : n
    );
    setNotes(updated);
  };
  return (
    <Router>
      <div>
        <h1>Notes App</h1>

        <nav>
          <Link to="/">Notes</Link> | <Link to="/add">Add Notes</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <NoteList
                notes={notes}
                deleteNote={deleteNote}
                toggleDone={toggleStatus}
              />
            }
          />
          <Route
            path="/add"
            element={<NoteForm addNote={addNote} />}
          />
          <Route
            path="/notes/:id"
            element={<NoteDetail notes={notes} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;