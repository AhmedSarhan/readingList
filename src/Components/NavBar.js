import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';

export default function NavBar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>Current Books: {books.length}</p>
    </div>
  );
}
