import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

import { Book } from "./components/books/books";
import { Header } from "./components/Header/Header";
import { Landing } from "./components/landing/landing";

import { AddBook } from "./components/books/addBook";
import { EditBook } from "./components/books/editBook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Book />} />
        <Route path="/addbook" element={<AddBook/>} />
        <Route path="/editbook/:id" element={<EditBook/>} />


      </Routes>
    </>
  );
}

export default App;
