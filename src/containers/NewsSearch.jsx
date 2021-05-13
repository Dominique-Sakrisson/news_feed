import React, { Component } from 'react'
import Search from '../components/app/articles/Search.jsx'
import ArticleList from '../components/app/articles/ArticleList.jsx';
import { getArticles } from '../services/newsApi.js';

export default class NewsSearch extends Component {
    state = {
        loading: true,
        articles: [],
        search: '',
    };

    async componentDidMount() {
        const articles = await getArticles('ford');
        this.setState({loading: false, articles})
    };

    handleArticleSearch=({target}) => {
        this.setState({search: target.value});
    }

    handleSubmit= async (event) => {
        event.preventDefault();
      

        this.setState({loading: true})
        const articles = await getArticles(this.state.search);
        this.setState({
        loading: false,
        articles
    })
    }
    render() {
        const {search, articles, loading, } =this.state;
        if(loading) return <h1>Loading...</h1>
        return (
            <>
                <Search 
                search={search} 
                onSearchChange={this.handleArticleSearch}
                onSubmit={this.handleSubmit}
                />
                <ArticleList articles={articles}/>
            </>
        )
    }
}

