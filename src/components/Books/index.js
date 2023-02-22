import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
// import FavStar from "./images/favorite.png";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState("");
  const [search, setSearch] = useState("");
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  // add to localstorage for fav books
  useEffect(() => {
    const storedFavoriteBooks = localStorage.getItem("favoriteBooks");
    if (storedFavoriteBooks) {
      setFavoriteBooks(JSON.parse(storedFavoriteBooks));
    }
  }, []);

  function getBook(event) {
    const books = event.target.value;
    setBooks(books);
  }

  function BooksAPI(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          books + "intitle&lite&key=AIzaSyDx_ik4msRaT_G-hnhwokbUvajRFdu_zAM&maxResults=5"
      )
      .then((response) => {
        setSearch(response.data);
        console.log(response.data);
        setBooks(" ");
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  // Get api response for favorite books
  function saveBook() {
    const newFavoriteBook = {
      title: search.items[0].volumeInfo.title,
      image: search.items[0].volumeInfo.imageLinks.thumbnail,
      authors: search.items[0].volumeInfo.authors,
      preview: JSON.stringify(search.items[0].volumeInfo.previewLink),
    };
    // check if the Title isn't the same so the book isn't added twice
    if (favoriteBooks.find((book) => book.title === newFavoriteBook.title)) {
      return;
    }

    const updatedFavoriteBooks = [...favoriteBooks, newFavoriteBook];
    setFavoriteBooks(updatedFavoriteBooks);

    localStorage.setItem("favoriteBooks", JSON.stringify(updatedFavoriteBooks));
    console.log(updatedFavoriteBooks);
  }

  // CLear the favorite books list from localstorage
  function deleteFavorite(title) {
    console.log(favoriteBooks);
    const updatedFavoriteBooks = favoriteBooks.splice(
      (book) => book.title !== title
    );
    localStorage.removeItem(
      "favoriteBooks",
      JSON.stringify(updatedFavoriteBooks)
    );
    // window.location.reload();
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
              value={books}
            />
          </div>
        </div>
      </div>
      <div className="buttonDiv">
        <button className="btn btn-success bookSearchBtn" onClick={BooksAPI}>
          Find a book!
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
              <h4 className="card-title">
                {search.items[0].volumeInfo.title}{" "}
                <p onClick={saveBook} className="favorite">
                  {" "}
                  <BsBookmarkStar />{" "}
                </p>
              </h4>
            )}
            <div className="previewDiv">
              {search.items && search.items.length > 0 && (
                <p className="card-text">
                  {search.items[0].volumeInfo.authors}
                </p>
              )}
              {search.items && search.items.length > 0 && (
                <a
                  href={search.items[0].volumeInfo.previewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="preview"
                >
                  {" "}
                  <AiOutlineRead /> Preview
                </a>
              )}
            </div>
          </div>
        </div>

           {/* Second Output */}
           <div className="BooksCard">
          {search.items && search.items.length > 1 && (
            <img
              className="card-img-top"
              src={search.items[1].volumeInfo.imageLinks.thumbnail}
              alt="test"
            />
          )}
          <div className="card-body">
            {search.items && search.items.length > 1 && (
              <h4 className="card-title">
                {search.items[0].volumeInfo.title}{" "}
                <p onClick={saveBook} className="favorite">
                  {" "}
                  <BsBookmarkStar />{" "}
                </p>
              </h4>
            )}
            <div className="previewDiv">
              {search.items && search.items.length > 1 && (
                <p className="card-text">
                  {search.items[1].volumeInfo.authors}
                </p>
              )}
              {search.items && search.items.length > 1 && (
                <a
                  href={search.items[1].volumeInfo.previewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="preview"
                >
                  {" "}
                  <AiOutlineRead /> Preview
                </a>
              )}
            </div>
            </div>
            </div>


           {/* Third Output */}
           <div className="BooksCard">
          {search.items && search.items.length > 2 && (
            <img
              className="card-img-top"
              src={search.items[2].volumeInfo.imageLinks.thumbnail}
              alt="test"
            />
          )}
          <div className="card-body">
            {search.items && search.items.length > 2 && (
              <h4 className="card-title">
                {search.items[2].volumeInfo.title}{" "}
                <p onClick={saveBook} className="favorite">
                  {" "}
                  <BsBookmarkStar />{" "}
                </p>
              </h4>
            )}
            <div className="previewDiv">
              {search.items && search.items.length > 2 && (
                <p className="card-text">
                  {search.items[2].volumeInfo.authors}
                </p>
              )}
              {search.items && search.items.length > 2 && (
                <a
                  href={search.items[2].volumeInfo.previewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="preview"
                >
                  {" "}
                  <AiOutlineRead /> Preview
                </a>
              )}
            </div>
            </div>
            </div>
      </div>
      <div>
        <div className="book-head">
          <h2 className="favouriteTitle">Your Favorite Books</h2>
          <Link
            to="books"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <button
              onClick={deleteFavorite}
              className="btn btn-primary btn-lg home-btn"
            >
              Clear List
            </button>
          </Link>
        </div>
        <div className="FavoriteBook">
          {favoriteBooks.map((book) => (
            <div className="favBooksInner" key={book.title}>
              <h5>{book.title}</h5>
              <img src={book.image} alt={book.title} />

              <p>{book.authors}</p>
              {search.items && search.items.length > 0 && (
                <a
                  href={search.items[0].volumeInfo.previewLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <AiOutlineRead /> Preview
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Books;
