import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import FavStar from "./images/favorite.png"

function Books() {
  const [books, setBooks] = useState("");
  const [search, setSearch] = useState("");
  const [favoriteBooks, setFavoriteBooks] = useState([]);

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
          "lite&key=AIzaSyDx_ik4msRaT_G-hnhwokbUvajRFdu_zAM&maxResults=1"
      )
      .then((response) => {
        console.log(response);
        setSearch(response.data);
        console.log(search);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function addToFavorites(book) {
    setFavoriteBooks([...favoriteBooks, book]);
    console.log(book);
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
      <div className="buttonDiv">
        <button className="btn btn-success bookSearchBtn" onClick={BooksAPI}>
          Click Me!
        </button>
      </div>
      <div className="booksContainer">
        {/* First Output */}
        <div className="BooksCard">
          {search.items && search.items.length > 0 && (
            <img
              className="card-img-top"
              src={search.items[0].volumeInfo.imageLinks.thumbnail}
              alt="test"
            />
          )}
          <div className="card-body">
            {search.items && search.items.length > 0 && (
              <h4 className="card-title">{search.items[0].volumeInfo.title} </h4>
            )}
            <button className="btn btn-warning favButton" onClick={() => addToFavorites(search.items[0])}>
              <img className="favorite" src={FavStar} alt="bin" />
            </button>
            {/* {search.items && search.items.length > 0 && (
              <p className="card-text">
                {search.items[0].volumeInfo.description}
              </p>
            )} */}
          </div>
        </div>
          </div>
        </div>
  );
}

export default Books;



