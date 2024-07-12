import React from 'react'
import { Book as BookType } from '../../definitions/models/book'
import Book from '../Book';

interface BooksProps {
	books: BookType[];
}

const Books = ({ books }: BooksProps) => {
  return (
    <div className="books">
      {books.map(book => <Book key={book.id} book={book} />)} 
    </div>
  )
}

export default Books
