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

    </div>
  )
}

export default Home;