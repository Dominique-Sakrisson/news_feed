import React from 'react'
import PropTypes from 'prop-types'

const Search = ({search, onSearchChange, onSubmit}) => (
    <form onSubmit={onSubmit}>
        <label htmlFor='article-search'>Search for article mentions</label>
        <input id='article-search' type='text' 
        value={search} 
        onChange={onSearchChange}/>
        <button aria-label='search-articles'>Submit</button>
    </form>
)

Search.propTypes={
    search: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Search;
