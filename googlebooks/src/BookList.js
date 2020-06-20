import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
return(
        <div className="booklist">
            {
               props.books.map((book, i) => {
                    return <BookCard 
                        key={i}
                        img={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.publishedDate}
                        />
               })     
            }
        </div>
    )
}

export default BookList;