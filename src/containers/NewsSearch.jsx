import React, { Component } from 'react'
import Search from '../components/app/articles/Search.jsx'
import ArticleList from '../components/app/articles/ArticleList.jsx';
import { getArticles, getHeadlines } from '../services/newsApi.js';
import style from '../components/app/styles/articleStyles.css'

export default class NewsSearch extends Component {
    state = {
        loading: true,
        articles: [],
        lastSearch: '',
        search: '',
        getArticles: false
    };

    async componentDidMount() {
        const articles = await getArticles('default');
        this.setState({loading: false, articles})
    };

    handleArticleSearch=({target}) => {
        this.setState({search: target.value});
    }

    handleSubmit= async (event) => {
        event.preventDefault();
       
        if(this.state.search){
            this.setState({loading: true, getArticles: true})
            const articles = await getArticles(this.state.search)
            this.setState({
                loading: false,
                articles,
                lastSearch: this.state.search 
            })
        } else{
            alert("enter a value")
        }
    }
    render() {
        const {search, lastSearch, articles, loading, getArticles} =this.state;
        if(loading) return <h1>Loading...</h1>
        return (
            <>
                <Search 
                search={search} 
                onSearchChange={this.handleArticleSearch}
                onSubmit={this.handleSubmit}
                />
                {(getArticles)? <h2>{`Headlines for ${lastSearch}`}</h2>: <h2>Some default articles</h2>}
                <div className={style.articleListDiv}>
                    <ArticleList articles={articles} /> 
                </div>
                <i>Articles provided by <a href="https://newsapi.org/" target="_blank">Newsapi.org</a></i>
            </>
        )
    }
}

