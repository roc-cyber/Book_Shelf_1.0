import React from 'react'
import Book from './Book'
import Books from '../BookObject'
import './App.css';
import Header from './Header';

export default function App() {

  return (
    <div className='Whole-UI'>
      <Header />
      <p className='Book-container'>
        {Books.map((book)=>
          <Book 
            //key={index}
            key={book.id}
            author={book.author}
            title={book.title}
            url={book.url}
            image={book.image}
            subtitle={book.subtitle === ""? "is Empty" : book.subtitle}
          />
        )}
      </p>
    </div>
  )
}
