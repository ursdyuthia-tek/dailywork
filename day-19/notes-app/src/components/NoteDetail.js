import { useParams, useNavigate } from "react-router-dom";

function NoteDetail({ notes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((n) => n.id === parseInt(id));
  if (!note) return <p>Note not found</p>;
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{note.date}</p>

      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
export default NoteDetail;