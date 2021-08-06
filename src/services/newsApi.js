export const getArticles = async(search) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.NEWS_API_KEY}&pageSize=20`);
    
    const json = await res.json();
    console.log(json);
  
    return json.articles.map((article) => ({
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage
    }))
}

export const getHeadlines = async() => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=20`);
    
    const json = await res.json();
    console.log(json);
  
    return json.articles.map((article) => ({
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage
    }))
}
