const prompt=require("prompt-sync")({sigint:true});

var destination = [] ;
for (var  i = 0; i < 2; i++)
{
    
    destination[i] = prompt("Enter destination: ");
    
}
var fare = [];

for (var i = 0; i < 2; i++)
{
    
    fare[i] = prompt("Enter fare: ");
}


var num = prompt("Enter a number less than 5: ");
if(num < 5)
{
    console.log("Destination: " + destination[num]);
    console.log("Fare: " + fare[num]);
}
else
{
    console.log("Invalid number ");
}