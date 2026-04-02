import { useState } from "react";

function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    status: "open"
  });

  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) {
      setError("Invalid Title");
      return;
    }
    setError("");
    addNote(note);
    setNote({
      title: "",
      status: "open"
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter note"
        value={note.title}
        onChange={(e) =>
          setNote({ ...note, title: e.target.value })
        }
      />
      <label>
        Status
        <input
          type="checkbox"
          checked={note.status === "closed"}
          onChange={(e) =>
            setNote({
              ...note,
              status: e.target.checked ? "closed" : "open"
            })
          }
        />
      </label>

      <button type="submit">Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default NoteForm;