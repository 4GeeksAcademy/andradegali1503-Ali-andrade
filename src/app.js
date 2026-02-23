import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    const who =['the dog', 'My grandma','The mailman','My bird'];
    const action=['ate', 'ped on ', 'crushed','broke'];
    const what=['my homewrok','myphone','the car'];
    const when=['before the glass', 'whe I was sleeping', 'while I was Exercising','durin my lunch','while I was praying'];

    let randomWho=who[Math.floor(Math.random()*who.length)];
    let randomAction=action[Math.floor(Math.random()*action.length)];
    let randomWaht=what[Math.floor(Math.random()*what.length)];
    let randomWhen=when[Math.floor(Math.random()*when.length)];


    let excuse= randomWho+" "+randomAction+" "+randomWaht+" "+randomWhen;


    document.getElementById("excuse").innerHTML= excuse;



};
