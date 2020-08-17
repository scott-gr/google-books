import React, { Component } from 'react';
import { searchResults } from '../services/apiService';

class Search extends Component {
  state = {
    searchValue: '',
    booksSearched: [],
  };
  handleSearch = (event) => {
    console.log(event.currentTarget.value);
    this.setState({ searchValue: event.currentTarget.value });
  };
  handleSearchAPI = async () => {
    const { data } = await searchResults(this.state.searchValue);
    console.log(data);
    const booksSearched = [];
    data.items.forEach((value, index) => {
      const authors = value.volumeInfo.authors;
      const title = value.volumeInfo.title;
      const description = value.volumeInfo.description;
      const image = value.volumeInfo.imageLinks.thumbnail;
      const link = value.volumeInfo.infoLink;
      const object = { authors, title, description, image, link };
      console.log(object);
      booksSearched.push(object);
    });
    this.setState({ booksSearched: booksSearched });
  };
  saveBook = async (book) => {
    try {
      console.log(book);
      const result = await saveBook(
        book.title,
        book.authors,
        book.description,
        book.image,
        book.link
      );
      console.log(result);
      alert('You saved this book!');
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return <div></div>;
  }
}

export default Search;
