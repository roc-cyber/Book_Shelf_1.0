import React from 'react'

const Book = ({author,title,url}) => {
  return (
    <div>
      <header>
        <h3>{author}</h3>
      </header>
      <p>My Book title is {title}, please refer to this link {<a href={url}>{author}</a>}</p>
    </div>
  )
}

export default Book;
