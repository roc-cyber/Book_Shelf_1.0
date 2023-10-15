import React from 'react'
import './App.css';
import Add from './AddButton';


const Book = ({author,title,url,subtitle,image}) => {
  return (
    <div className='Book-object'>
      <header>
        <h3 className='header-author'>{title}</h3>
      </header>
      <img className='image-model' src={image} alt='Book' />
      <p className='book-text'>My Book subtitle {subtitle}, please refer to this link {<a href={url}>{author}</a>}</p>
      <Add />
      
    </div>
  )
}

export default Book;
