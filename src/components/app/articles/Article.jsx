import React from 'react'
import PropTypes from 'prop-types'

const Article = ({author, title, description, url, urlToImage}) => (
    <>
    {/* debating having an iframe which allows the user to read article without navigating away from our site */}
    {/* <iframe src={url} frameborder="0"></iframe> */}
        <h2>{title}</h2>
        <img src={urlToImage} alt="" />
        <h3> By: {author}</h3>
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
