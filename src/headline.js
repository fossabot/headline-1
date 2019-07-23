// Configuration

const apiKey = 'b1648588a5b04c818d96dc3520224c4d';
// const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const apiUrl = `https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}`;


//headline object
const headline = {
  name:'headline',
  getTopHeadline: () => {
    return fetch(apiUrl)
    .then(response => response)
    .then(response => response.json());
    
  },
}

export {headline}