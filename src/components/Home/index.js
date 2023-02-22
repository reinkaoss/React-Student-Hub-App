import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <div className="jumbotron home-img">
        <div className='overlay'>
        <h1 className="display-4">Student Hub</h1>
        {/* <hr className="my-4" /> */}
        <p className="lead">Discover a smarter way to read and take notes with our innovative web app. Our platform combines powerful reading tools with intuitive note-taking features, making it easier than ever to stay organized and focused. With our app, you can access your favorite books, articles, and documents anytime, anywhere, and take notes effortlessly, so you never forget important ideas or insights. Whether you're a student, a researcher, or simply an avid reader, our app has everything you need to stay on top of your game. So, start exploring our platform today and take your reading and note-taking to the next level!</p>
        <Link to="/books">
          <a className="btn btn-primary btn-lg home-btn" href="/books" role="button">Get Started</a>
          </Link>
        </div>
      </div>

      <section className='book-search'>
        <div className='bk-container'>
        <h1 className='search-header'>Search for your favorite book...</h1>
        
          <img  className="search-img" src='./images/Book-search.jpg' />

          <p className='search-text'> 
          Looking for a specific book? Use our "Search for your favorite book" feature to find it quickly and easily. Try it out today and discover your new favorite read!
          </p>
        </div>

        <div className='bk-container'>
        <h1 className='search-header'>Take Notes...</h1>
        
          <img  className="search-img" src='./images/Take-note.jpg' />

          <p className='search-text'> 
          Looking for a specific book? Use our "Search for your favorite book" feature to find it quickly and easily. Try it out today and discover your new favorite read!
          </p>
        </div>

        <div className='bk-container'>
        <h1 className='search-header'>Share with friends and colleagues...</h1>
        
          <img  className="search-img" src='./images/Share.jpg' />

          <p className='search-text'> 
          Looking for a specific book? Use our "Search for your favorite book" feature to find it quickly and easily. Try it out today and discover your new favorite read!
          </p>
        </div>
      </section>

    </div>
  )
}

export default Home;