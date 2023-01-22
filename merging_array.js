const prompt=require("prompt-sync")({sigint:true});
var names = [];
var destinations = [];
for (let i = 0; i < 5; i++) {
     names[i]= prompt('Ente rthe name');
}
for (let i = 0; i < 5; i++) {
destinations[i] = prompt('Enter the destination');    
}

var merge = names.concat(destinations);
merge.forEach(element => {
  console.log(element);  
});
