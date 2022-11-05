import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import Header from './Searchbar.styled';
import Form from './SearchForm.styled';

const Searchbar = ({ value, onSubmit }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <Header className="Searchbar">
      <Form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
      </Form>
    </Header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
