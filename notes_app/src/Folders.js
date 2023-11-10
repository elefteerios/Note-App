import "./Folders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFolder,
  faCaretDown,
  faCheck,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Folder({
  activeCategory,
  setActiveCategory,
  category,
  category_loading,
  category_error,
  activeNote,
  setReGetData,
  reGetData,
}) {
  const [btnStatus, setBtnStatus] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  function createCategory(category_name) {
    setBtnStatus(false);
    fetch(`http://localhost:8000/category`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: category_name }),
    }).then(() => {
      console.log("Success, Category created");
      setReGetData(!reGetData);
    });
  }
  return (
    <div
      className={`folder ${activeNote != false ? "block_cursor" : undefined}`}
    >
      {btnStatus == true ? (
        <div className="create-category categoryBtn">
          <input
            type="text"
            placeholder="Add a title..."
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: "#ffffff" }}
            onClick={() => createCategory(newCategory)}
          />
          <FontAwesomeIcon
            icon={faX}
            style={{ color: "#ffffff" }}
            id="x"
            onClick={() => setBtnStatus(false)}
          />
        </div>
      ) : (
        <div className="create-category" onClick={() => setBtnStatus(true)}>
          <p>Create Category</p>
          <div className="vertical-line"></div>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
        </div>
      )}
      <div className="category">
        {category_error && <div>{category_error}</div>}
        {category_loading && <div>Loading...</div>}
        {category &&
          category.map((data) => (
            <div
              className={`category_list create-category ${
                data.id === activeCategory && "active"
              }`}
              key={data.id}
              onClick={() => setActiveCategory(data.id)}
            >
              <FontAwesomeIcon icon={faFolder} size="xl" />
              <p className="catefory_name">{data.category}</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                size="lg"
                rotation={data.id === activeCategory ? 270 : 0}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
