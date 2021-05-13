import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article.jsx'

const ArticleList = ({articles}) => (
    <ul aria-label='article-list'>
        {articles.map(article => (
            <li key={`${article.author}-${article.title}`}>
                <Article {...article}/>
                <hr/>
            </li>
        ))}
        
    </ul>
)

ArticleList.propTypes= {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    )
}

export default ArticleList;
