import "./landing.css";
import { Link } from "react-router-dom";

export function Landing() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Welcome to Book Library</h1>
        <p>
          Organize your books, add new ones, and manage your personal library
          with ease.
        </p>

        <Link to="/books" className="button">
          Get Started
        </Link>
      </div>
    </div>
  );
}