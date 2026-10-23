import "./header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header">
      <h2>Book Library</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/addbook">Add book</Link>
      </div>
    </div>
  );
}
