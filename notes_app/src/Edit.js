import "./Edit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AddNote from "./AddNote";

export default function Edit({
  notes,
  activeNote,
  activeCategory,
  setActiveNote,
  setReGetData,
  reGetData,
}) {
  const [note_title, setNote_Title] = useState("");
  const [note_text, setNote_Text] = useState("");
  const category = activeCategory === false ? 999999999 : activeCategory;
  const handleSubmit = (event) => {
    event.preventDefault();
    var updatedNote = {
      category,
      note_title,
      note_text,
    };
    if (updatedNote.note_title === "" || updatedNote.note_text === "") {
      console.log("Please enter a Title and Note or change them");
      setActiveNote(false);
    } else {
      fetch(`http://localhost:8000/notes/${activeNote}`).then((res) => {
        if (res.ok) {
          return fetch(`http://localhost:8000/notes/${activeNote}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedNote),
          }).then(() => {
            console.log("Success, Data Updated");
            setNote_Text("");
            setNote_Title("");
            setActiveNote(false);
            setReGetData(!reGetData);
          });
        } else {
          fetch(`http://localhost:8000/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedNote),
          })
            .then(() => {
              console.log("Success, Data Added");
              setNote_Text("");
              setNote_Title("");
              setActiveNote(false);
              setReGetData(!reGetData);
            })
            .catch((err) =>
              console.log(
                `Since an object with id: ${activeNote} was not found, it was created`
              )
            );
        }
      });
    }
    event.target.reset();
  };

  const deleteNote = () => {
    fetch(`http://localhost:8000/notes/${activeNote}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Success, Data Deleted");
      setActiveNote(false);
      setReGetData(!reGetData);
    });
  };
  return (
    <div
      className={`${
        activeCategory === false
          ? "folder edit"
          : activeNote === false
          ? "hide"
          : "folder edit"
      }`}
    >
      <div className="nothing">
        <div className="nothing_container">
          <div className="create-category element_left"></div>
          <div className="create-category element_left"></div>
          <div className="create-category element_left"></div>
        </div>
        <div className="nothing_container">
          <div className="create-category element_right"></div>
          <div className="create-category element_right"></div>
          <div className="create-category element_right"></div>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        {activeNote === "creating_new_note" || activeCategory === false ? (
          <AddNote setNote_Title={setNote_Title} setNote_Text={setNote_Text} />
        ) : (
          notes &&
          notes.map(
            (note) =>
              activeCategory === note.category &&
              activeNote === note.id && (
                <div key={note.id} className="edit_field">
                  <div className="edit_title">
                    <input
                      onChange={(e) => setNote_Title(e.target.value)}
                      type="text"
                      defaultValue={note.note_title}
                      required
                    ></input>
                  </div>
                  <div className="horizontal-line edit_line"></div>
                  <div className="edit_text">
                    <textarea
                      onChange={(e) => setNote_Text(e.target.value)}
                      required
                      defaultValue={note.note_text}
                    ></textarea>
                  </div>
                </div>
              )
          )
        )}
        <div
          className={`${
            activeNote === "creating_new_note" || activeCategory === false
              ? "btn_right buttons"
              : "buttons"
          }`}
        >
          <div
            className={`${
              activeNote === "creating_new_note" || activeCategory === false
                ? "hide"
                : "create-category delete_btn"
            }`}
            onClick={deleteNote}
          >
            <div>Delete Note</div>
            <div className="vertical-line delete_line"></div>
            <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} />
          </div>
          <button className={"create-category save_btn"}>
            <div>Save Changes</div>
            <div className="vertical-line sava_line"></div>
            <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff" }} />
          </button>
        </div>
      </form>
    </div>
  );
}
