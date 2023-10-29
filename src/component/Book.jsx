import React from 'react'
import './App.css';
import Add from './AddButton';


const Book = ({author,title,url,subtitle,image,key,price}) => {
  return (
    <div className='Book-object'>
      <header>
        <h4 className='header-author'>{title}</h4>
      </header>
      <img className='image-model' src={image} alt='Book' />
      <p className='book-text'>{subtitle.slice(0,100)}{<a href={url}>Book</a>}</p>
      <p className='price-tag'>Price of the book: ${price}</p>
      <Add key={key} title={title} author={author} price={price}/>
      
    </div>
  )
}

export default Book;
