import { useState } from 'react';
import './Bookshelf.css';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

    const [newBook, setNewBook] = useState({ title: '', author: '' });
      
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks((prevBooks) => [...prevBooks, newBook]);
        setNewBook({ title: '', author: '' });
    };

    const deleteBook = (index) => {
        const updatedBooks = books.filter((book, i) => i !== index);
        setBooks(updatedBooks);
    };

    return (
        <div className="bookshelfDiv">
          <div className="formDiv">
            <h3>Add a Book</h3>
            <form>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleInputChange}
                value={newBook.title}
              />
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                id="author"
                name="author"
                onChange={handleInputChange}
                value={newBook.author}
              />
              <button 
                type="submit"
                onClick={handleSubmit}
              >
                Add Book
              </button>
            </form>
          </div>
          <div className="bookCardsDiv">{/* Book cards will display here */}
            {books.map((book, index) => (
              <div key={index} className="bookCard">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <button onClick={() => deleteBook(index)}>Delete</button>
              </div>
            ))}
          </div>

        </div>
    );
}

export default Bookshelf;
