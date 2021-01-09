import React, { useContext, useState } from 'react';
import { BookContext } from '../Context/BookContext';

export default function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { dispatch } = useContext(BookContext);
  const newBookHandler = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', title, author });
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={newBookHandler}>
      <label htmlFor="title">Book Title</label>
      <input
        name="title"
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="author">Book Author</label>
      <input
        name="author"
        id="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
}
