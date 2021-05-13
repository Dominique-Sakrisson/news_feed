export const getArticles = async(search) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.NEWS_API_KEY}`)
    
    const json =await  res.json();
    console.log(json.articles);
    return json.articles.map((article) => ({
        author: article.author,
        title: article.title,
        description: article.description
    }))
}
