const prompt=require("prompt-sync")({sigint:true});
let dest_array = [];
let dist_array = [];
let fare_array = [];
// for (let i = 0; index < 5; i++) {
//     let  destination = prompt('Enter the destination: ');
//     dest_array.push(destination);
// }
// for (let i = 0; index < 5; i++) {
//     let distance = parseFloat(prompt('Enter the distance: '));
//     dist_array.push(distance);
// }
// for (let i = 0; i <5; i++) {
//     let fare = parseFloat(prompt('Enter the fare: '));
//     fare_array.push(fare);
// }


let array = [];
for (let i = 0; i <2; i++) {
    let dest = prompt('Enter the name: ');
    let dist = prompt('Enter the distsnce: ');
    let fare = prompt('Enter the fare: ');
    let flight ={
        destination:dest,
        distance:dist,
        fare_p:fare
    }
    array.push(flight);
}

console.log(array);

// array.forEach(element => {
//     if (condition) {
        
//     }
// });
array.sort((a,b)=>a.distance-b.distance);
console.log('Shortest distance:' + array[0][d]);
