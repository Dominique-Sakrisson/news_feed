exports.handler = async function(event, context, search) {
    // your server-side functionality
    try {
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
    } catch (error) {
        console.log('error');
    }
}