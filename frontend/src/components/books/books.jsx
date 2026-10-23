import { useEffect, useState } from "react";
import "./books.css";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
export function Book() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch("http://localhost:3000/books");
        const books = await response.json();
        setBooks(books);
        console.log(books);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <>
      <Header />
      <div className="grid">
        {books.map((p) => (
          <div className="book-card">
            <img src={p.image_url} alt={p.title} />
            <p className="title">{p.title}</p>
            <p className="author">author: {p.author}</p>
            <p className="genre">Genre: {p.genre}</p>
            <p className="rating">Rating: {p.rating}</p>
            <div className="buttons">
              <Link to={`/editbook/${p._id}`}>Edit</Link>
              <button
                onClick={async () => {
                  try {
                    const response = await fetch(
                      `http://localhost:3000/books/${p._id}`,
                      {
                        method: "DELETE",
                      },
                    );
                    window.location.reload();
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
