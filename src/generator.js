const generator = {
  name: 'generator',
  generateHTML,
};

function generateHTML(data) {
  const articles = data.articles;
  console.log("I'm generating");
  //add articles container
  const articlesContainer = document.createElement("div");
  articlesContainer.id = "articles-container";
  document.getElementById("app").appendChild(articlesContainer);
  //append to articles container
  const articlesEl = mapToEl(articles);
  return {
    generatedHTML : articlesEl,
    put,    
  };
  

}

function mapToEl(article) {
  return article.map(prop => {
    let card = document.createElement("div");
    card.classList = "card";
    //inner
    let image = document.createElement("img");
    image.src = prop.urlToImage;
    image.width = "300";
    image.height = "300";
    //title
    let title = document.createElement("p");
    let anchor = document.createElement("a");
    anchor.href = prop.url;
    anchor.textContent = prop.title;
    anchor.target = "_new";
    //description
    let description = document.createElement("p");
    description.textContent = prop.description;
    //appends
    title.appendChild(anchor);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);

    return card;
  });

}

function put(targetEl) {
  // debugger;
  this.generatedHTML.forEach(element => document.getElementById(targetEl).appendChild(element));
}


export default  generator

