const prompt=require("prompt-sync")({sigint:true});

let array = [];
for(let i = 0; i < 5; i++){
    let price = prompt("Enter the fare:");
    array.push(price); 
}

console.log( 'Assending order of fare:'+array.sort());
console.log( 'Minimum value:'+array[0]);

console.log( 'Dessending order of fare:'+array.reverse());
console.log( 'Maximum value:'+array[0]);

let key = prompt('Enter the value to be find : ');

let flag = 0;
array.forEach(element => {
    if (key == element) {
       flag = 1;
       console.log(element);
    }
});
if (flag == 0){
    console.log('not found');
}

const findDuplicates = array =>array.filter((i,index)=>array.indexOf(i)!==index)
const duplicates = findDuplicates(array);
console.log(duplicates);





