import "./Notes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Notes({
  activeCategory,
  notes,
  activeNote,
  setActiveNote,
  notes_error,
  notes_loading,
}) {
  const [search, setSearch] = useState("");
  return (
    <div
      className={`${activeNote != false ? "block_cursor" : undefined} ${
        activeCategory == false ? "hide" : "folder note"
      }`}
    >
      <div className="note_create_search">
        <div
          className="create-category create-note"
          onClick={() => setActiveNote("creating_new_note")}
        >
          <p>Create Note</p>
          <div className="vertical-line"></div>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
        </div>
        <div
          className="search"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        >
          <label htmlFor="search">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#EAEAEA" }}
            />
          </label>
          <input type="search" id="search" placeholder="Search..." />
        </div>
      </div>
      <div className="category bar">
        {notes_error && <div>{notes_error}</div>}
        {notes_loading && <div>Loading...</div>}
        {notes &&
          notes
            .filter((note) => {
              return activeCategory == false
                ? undefined
                : note.note_title.toLowerCase().includes(search);
            })
            .map(
              (notes) =>
                activeCategory == notes.category && (
                  <div
                    key={notes.id}
                    className={`notes ${
                      notes.id === activeNote && "active_note"
                    }`}
                    onClick={() => setActiveNote(notes.id)}
                  >
                    <p className="title">{notes.note_title}</p>
                    <p>{notes.note_text}</p>
                    <div className="horizontal-line"></div>
                  </div>
                )
            )}
      </div>
    </div>
  );
}
