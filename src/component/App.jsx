import React from 'react'
import Book from './Book'
import Books from '../BookObject'
import './App.css';

export default function App() {


  return (
    <div>
      <h1 className='Book-header'>BookShelf</h1>
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
