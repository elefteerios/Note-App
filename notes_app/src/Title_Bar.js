import "./Title_Bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Title_Bar() {
  return (
    <nav className="title_bar">
      <p className="text_600">Your Notes</p>
      <FontAwesomeIcon icon={faX} style={{ color: "#ffffff" }} />
    </nav>
  );
}
