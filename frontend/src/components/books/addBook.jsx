import { useState, useEffect } from "react";
import "./addBook.css";

export function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [image_url, setImage_url] = useState("");
  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const response = await fetch("http://localhost:3000/books", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title,
                author,
                genre,
                rating,
                image_url,
              }),
            });
            if(!response.ok){
              throw new Error("Failed to add book");
            }
          } catch (error) {
            alert(error);
          }
        }}
      >
        <input
          type="text"
          placeholder="Enter book title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter author name"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter genre"
          onChange={(event) => {
            setGenre(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter Rating(1-5)"
          onChange={(event) => {
            setRating(Number(event.target.value));
          }}
        ></input>

        <input
            type="text"
            placeholder="Enter image URL"
          onChange={(event) => {
            setImage_url(event.target.value);
          }}
        ></input>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
