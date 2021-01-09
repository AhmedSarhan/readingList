import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';

export default function BookList() {
  const { books, dispatch } = useContext(BookContext);
  console.log(books);
  return (
    <>
      {books.length ? (
        <div className="book-list">
          <ul>
            {books.map((book) => {
              return (
                <li
                  key={book.id}
                  onClick={() => {
                    dispatch({ type: 'REMOVE_BOOK', id: book.id });
                  }}
                >
                  <h3>{book.title}</h3>
                  <h5>By: {book.author}</h5>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">
          No books to read yet ... try adding your own
        </div>
      )}
    </>
  );
}
