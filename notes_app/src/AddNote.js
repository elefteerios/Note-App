import "./AddNote.css";

export default function AddNote({ setNote_Title, setNote_Text }) {
  return (
    <div className="edit_field">
      <div className="edit_title">
        <input
          onChange={(e) => setNote_Title(e.target.value)}
          type="text"
          placeholder="Add a title"
        ></input>
      </div>
      <div className="horizontal-line edit_line"></div>
      <div className="edit_text">
        <textarea
          onChange={(e) => setNote_Text(e.target.value)}
          placeholder="Write your note here..."
        ></textarea>
      </div>
    </div>
  );
}
