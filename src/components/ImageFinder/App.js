import React, { Component } from 'react';
import Gallery from './Gallery';
import SearchForm from './SearchForm';
import fetchData from '../../services/Api';
import styles from './App.module.css';

class App extends Component {
  state = {
    galleryArray: [],
    page: 1,
    value: '',
  };

  componentDidMount() {
    const { value } = this.state;
    this.FetchPictures(value);
  }

  handleClick = () => {
    const { page, value } = this.state;
    this.setState(
      {
        page: page + 1,
      },
      () => {
        this.FetchPictures(value, page);
      },
    );
  };

  FetchPictures = (query, page) => {
    const { galleryArray, value } = this.state;
    if (value !== query) {
      this.setState(prevState => ({
        value: prevState !== query ? query : prevState,
        page: 1,
        galleryArray: [],
      }));
    }
    fetchData(query, page)
      .then(data => {
        this.setState(prevState => ({
          galleryArray:
            galleryArray.length === 0
              ? data.data.hits
              : [...prevState.galleryArray, ...data.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(erorr => erorr);
  };

  render() {
    const { galleryArray } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm onSubmit={this.FetchPictures} />
        {galleryArray.length > 0 && <Gallery pictures={galleryArray} />}
        <button
          type="button"
          className={styles.button}
          onClick={this.handleClick}
        >
          Load more
        </button>
      </div>
    );
  }
}

export default App;
