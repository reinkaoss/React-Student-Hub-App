import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"

function Books() {
  const [books, setBooks] = useState("");
  const [search, setSearch] = useState("")

  function getBook(event) {
    const books = event.target.value;
    setBooks(books);
  }

  function BooksAPI(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          books +
          "lite&key=AIzaSyC0YC5pzrMGPGFPPY7JJ_3t60E3hFwtC8k&maxResults=3"
      )
      .then((response) => {
        // console.log(response.data);
        setSearch(response.data);
        console.log(search);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <div>
      <form onSubmit={BooksAPI} />
      <div className="searchGroup">
        <div className="row">
          <div className="col-12">
            <input
              onChange={getBook}
              className="form-control"
              placeholder="Find a book"
              type="text"
            />
          </div>
        </div>
      </div>
      <button className="btn btn-success bookSearchBtn" onClick={BooksAPI}>Click Me!</button>
      <div className="booksContainer">
        {/* First Output */}
      <div className="BooksCard">
      {search.items && search.items.length > 0 && (
        <img className="card-img-top" src={search.items[0].volumeInfo.imageLinks.thumbnail} alt="test"/>)}
        <div className="card-body">
        {search.items && search.items.length > 0 && (
  <h4 className="card-title">{search.items[0].volumeInfo.title}</h4>
)}
{search.items && search.items.length > 0 && (
          <p className="card-text">{search.items[0].volumeInfo.description}</p>)}
        </div>
      </div>

      {/* Second Output */}
      <div className="BooksCard">
      {search.items && search.items.length > 1 && (
        <img className="card-img-top" src={search.items[1].volumeInfo.imageLinks.thumbnail} alt="test"/>)}
        <div className="card-body">
        {search.items && search.items.length > 1 && (
  <h4 className="card-title">{search.items[1].volumeInfo.title}</h4>
)}
{search.items && search.items.length > 1 && (
          <p className="card-text">{search.items[1].volumeInfo.description}</p>)}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Books;
