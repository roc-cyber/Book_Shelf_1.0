import React from 'react'
import Book from './Book'
import Books from '../BookObject'
const Content = () => {
  return (
    <>
      <p className='Book-container'>
        {Books.map((book)=>
          <Book 
            //key={index}
            key={book.id}
            author={book.author}
            title={book.title}
            url={book.url}
            image={book.image}
            price={book.price}
            subtitle={book.subtitle === ""? "is Empty" : book.subtitle}
          />
        )}
      </p>
    </>
  )
}

export default Content;
