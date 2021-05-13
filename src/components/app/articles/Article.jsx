import React from 'react'
import PropTypes from 'prop-types'

const Article = ({author, title, description}) => (
    <>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{description}</p>
    </>
)

Article.propTypes= {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Article;
