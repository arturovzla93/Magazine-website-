const main= document.querySelector('main');

window.addEventListener('load',()=>{
    updateNews();
})

const updateNews=()=>{
    const url='http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-06&sortBy=publishedAt&apiKey=489383a1f0a647bc876947861625fa60';

    fetch(url)
    .then(res=>res.json())
    .then(data=> main.innerHTML=data.articles.map(createArticle).join('\n'));
}

const createArticle= article=>{
    return `
    <div class="container>
        <div class="box>
            <div class="article"
                <a href="${article.url}">
                    <h3>${article.title}</h3>
                    <img src="${article.urlToImage}">
                    <p>${article.description}</p>
                    <p>${article.description}<p>
                </a>
            </div>
        <div>
    </div>
    `;
}