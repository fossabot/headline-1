require("babel-core/register");
require("babel-polyfill");

import {headline} from './headline';
import {generator} from './generator';



start();

function start() {
  generateTopHeadline();
}

async function generateTopHeadline() {
  const headLineData = await headline.getTopHeadline();
  const headLineHTML = generator.generateHTML(headLineData);
  document.createElement("div").id="articles-container";
  headLineHTML.put("articles-container");
  

}



document.getElementById("app").innerHTML ="<h1>Welcome</h1>";