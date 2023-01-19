const prompt=require("prompt-sync")({sigint:true});

var name = prompt("enter the name: ");
var miles = prompt("Enter the distance total travelled: ");
if (miles > 10000 && miles < 20000)

    console.log("Award 10 frequent flyer");

else if (miles < 50000)
console.log("Award 20 frequent flyer");
else if (miles < 100000)
console.log("Award 30 frequent flyer");
else 
console.log("Award 30 frequent flyer");

