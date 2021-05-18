import React from 'react'
import PropTypes from 'prop-types'

const Article = ({author, title, description, url}) => (
    <>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{description}</p>
        <a href={url}>Read the full article</a>
    </>
)

Article.propTypes= {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Article;
