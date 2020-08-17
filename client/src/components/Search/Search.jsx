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
    return (
      <div class="section hero is-primary is-small">
        <section class="hero is-primary is-small">
          <div class="hero-head">
            <nav class="navbar">
              <div class="container">
                <div class="navbar-brand">
                  <span
                    class="navbar-burger burger"
                    data-target="navbarMenuHeroA"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <div id="navbarMenuHeroA" class="navbar-menu">
                  <div class="navbar-end">
                    <a class="navbar-item is-active">Search</a>
                    <a class="navbar-item">Saved Books</a>
                    <span class="navbar-item">
                      <a
                        class="button is-primary is-inverted"
                        href="https://github.com/scott-gr/google-books"
                        target="_blank"
                      >
                        <span class="icon">
                          <i class="fab fa-github"></i>
                        </span>
                        <span>View on github</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">Google Books API Search</h1>
              <h2 class="subtitle">find and save your books</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
