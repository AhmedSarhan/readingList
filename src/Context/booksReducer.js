import { v4 as uuidv4 } from 'uuid';

export const booksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        { title: action.title, author: action.author, id: uuidv4() },
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => {
        return book.id !== action.id;
      });
    default:
      return state;
  }
};
