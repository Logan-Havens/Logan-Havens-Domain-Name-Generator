/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Write your code here
console.log("Hello logan from the console!");

let pronoun = ["the", "our", "my"];
let adj = ["super", "ghostly", "dark", "crushing"];
let noun = ["axe", "volleball", "athlete", "liger"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(pronoun[i] + adj[j] + noun[k] + ".com");
    }
  }
}
