/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

var club = () => {
  var black = ["\u2660", "\u2663"];

  var black1 = black[Math.floor(Math.random() * black.length)];

  return black1;
};
var output = club();

document.querySelector("#head").innerHTML = "<h1 id= head>" + output + "</h1>";
document.querySelector("#foot").innerHTML = "<h1 id= foot>" + output + "</h1>";
