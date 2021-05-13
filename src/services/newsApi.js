export const getArticles = async(search) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.NEWS_API_KEY}&pageSize=20`)
    
    const json =await  res.json();
  
    return json.articles.map((article) => ({
        author: article.author,
        title: article.title,
        description: article.description
    }))
}
