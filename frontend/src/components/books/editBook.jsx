

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [image_url, setImage_url] = useState("");

  const {id} = useParams()

  async function handleEdit(event) {
    event.preventDefault();

    try {
        const response = await fetch(`http://localhost:3000/books/${id}`, {
            method: "PUT",
   
            body: JSON.stringify({
                title,
                author,
                genre,
                rating,
                image_url,
            }),
        });
        if(!response.ok){
            throw new Error("Failed to edit book");
        }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
    <div>
      <h1>Edit Book</h1>
      <p>This is the Edit Book page.</p>
    </div>
    <form onSubmit={handleEdit}>
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

        <button type="submit">Edit</button>
    </form>
    </>
  );
}