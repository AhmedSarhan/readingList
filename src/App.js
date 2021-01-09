import NavBar from './Components/NavBar';
import BookList from './Components/BookList';
import BookContextProvider from './Context/BookContext';
import NewBook from './Components/NewBook';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <NewBook />
      </BookContextProvider>
    </div>
  );
}

export default App;
