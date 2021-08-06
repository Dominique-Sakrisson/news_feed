import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article.jsx'
import style from '../styles/articleStyles.css'

const ArticleList = ({articles}) => (
    <ul aria-label='article-list' className={style.articleList}>
        {articles.map(article => (
            <li className={style.articleItem} key={`${article.author}-${article.title}`} >
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
