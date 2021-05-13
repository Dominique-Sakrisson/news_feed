import React from 'react'
import PropTypes from 'prop-types'

const Search = ({search, onSearchChange, onSubmit}) => (
    <form onSubmit={onSubmit}>
        <label htmlFor='article-search'>Search for article mentions</label>
        <input name='article-search' type='text' 
        value={search} 
        onChange={onSearchChange}/>
        <button>Submit</button>
    </form>
)

Search.propTypes={
    search: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Search;
