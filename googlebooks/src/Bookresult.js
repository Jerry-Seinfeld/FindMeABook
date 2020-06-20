import React, { Component } from 'react';
import Search from './Search';
import request from 'superagent';
import BookList from './BookList';



class Bookresult extends Component {
constructor(props){
    super(props);
    this.state = {
        books: [],
        InputBox: ''
    }
}

searchBookName = (e) => {
    e.preventDefault();
request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ q: this.state.InputBox })
    .then((data) => {
        this.setState({ books: [...data.body.items]})
        console.log(data);

    })
}

handlebox = (e) => {
    console.log(e.target.value);
    this.setState({ InputBox: e.target.value })
}

  render() {
  return (
    <div>
     <Search searchBookName={this.searchBookName} handlebox={this.handlebox}/>
     <BookList books={this.state.books} />
    </div>
  );
 }
}

export default Bookresult;