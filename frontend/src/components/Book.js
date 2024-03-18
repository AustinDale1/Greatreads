import React, {useState, useEffect} from 'react'


const Book = (book) => {
    console.log(book.book)
    return (
        <div className='book'>{book.book.title}</div>
    )
}

export default Book