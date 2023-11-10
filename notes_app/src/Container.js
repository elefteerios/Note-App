import { useState } from "react";
import "./Container.css";
import Folder from "./Folders.js";
import Notes from "./Notes";
import Edit from "./Edit";
import useFetch from "./useFetch";

export default function Container() {
  const [activeCategory, setActiveCategory] = useState(false);
  const [activeNote, setActiveNote] = useState(false);
  const [reGetData, setReGetData] = useState(false);

  const {
    data: category,
    loading: category_loading,
    error: category_error,
  } = useFetch("http://localhost:8000/category", reGetData);
  const {
    data: notes,
    loading: notes_loading,
    error: notes_error,
  } = useFetch("http://localhost:8000/notes", reGetData);

  return (
    <section className="Container">
      <Folder
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        category={category}
        category_loading={category_loading}
        category_error={category_error}
        activeNote={activeNote}
        setReGetData={setReGetData}
        reGetData={reGetData}
        setActiveNote={setActiveNote}
      />
      <Notes
        activeCategory={activeCategory}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        notes_loading={notes_loading}
        notes_error={notes_error}
      />
      <Edit
        activeNote={activeNote}
        notes={notes}
        activeCategory={activeCategory}
        setActiveNote={setActiveNote}
        setReGetData={setReGetData}
        reGetData={reGetData}
      />
    </section>
  );
}
