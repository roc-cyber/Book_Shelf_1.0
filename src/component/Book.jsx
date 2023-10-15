import React from 'react'
import './App.css';
const Book = ({author,title,url,subtitle,Image}) => {
  return (
    <div className='Book-object'>
      
      <header>
        <h3 className='header-author'>{title}</h3>
      </header>
      <img className='image-model' src={Image} alt='Book' />
      <p>My Book subtitle {subtitle}, please refer to this link {<a href={url}>{author}</a>}</p>
    </div>
  )
}

export default Book;
