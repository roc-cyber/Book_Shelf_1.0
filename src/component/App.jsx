import React from 'react'
import Book from './Book'
import Books from '../BookObject'
import './App.css';

export default function App() {

  

  return (
    <div>
      <h1 className='Book-header'>Book List</h1>
      {Books.map((book,index)=>
        <Book 
          //key={index}
          key={book.id}
          author={book.author}
          title={book.title}
          url={book.url}
        />
      )}
      
    </div>
  )
}
