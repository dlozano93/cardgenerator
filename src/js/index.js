/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
import { cpus } from "os";
var clubs = () => {
  var club = ["\u2666", "\u2660", "\u2663", "\u2665"];

  var club1 = club[Math.floor(Math.random() * club.length)];

  return club1;
};
var card = () => {
  var cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  var cards1 = cards[Math.floor(Math.random() * cards.length)];
  return cards1;
};
window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#head").innerHTML =
      "<h1 class='head'>" + clubs() + "</h1>";

    document.querySelector("#foot").innerHTML = document.querySelector(
      "#head"
    ).innerHTML = "<h1 class='head'>" + clubs() + "</h1>";

    document.querySelector("#number").innerHTML =
      "<p id=number>" + card() + "</p>";
    document.querySelector(".suit").classList.add = "red";

    document.querySelector(".suit").classList.add = "black";
  });
};
