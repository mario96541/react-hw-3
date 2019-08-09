import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleCange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={query}
          autoComplete="off"
          placeholder="Search images..."
          onChange={this.handleCange}
        />
      </form>
    );
  }
}
export default SearchForm;
