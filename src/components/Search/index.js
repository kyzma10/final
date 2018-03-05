import React, { Component } from 'react';
import FaSearch from 'react-icons/lib/fa/search';

class Search extends Component {
  constructor() {
    super();
    this.state = { inputValue: '' };
  }

  render() {
    return (
      <div id="search">
        <label htmlFor=""><FaSearch /></label>
        <input type="text" placeholder="Search contacts..." />
      </div>
    );
  }
}

export default Search;
