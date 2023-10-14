import React from 'react'
import './App.css';
const Book = ({author,title,url}) => {
  return (
    <div>
      <header>
        <h3 className='header-author'>{author}</h3>
      </header>
      <p>My Book title is {title}, please refer to this link {<a href={url}>{author}</a>}</p>
    </div>
  )
}

export default Book;
