let array = []
const prompt=require("prompt-sync")({sigint:true});

// Accept element from user

for(let i = 0; i < 10; i++){
    let name = prompt("Enter Your Name:");
    array.push(name);

}
   console.log(array);

// Assending order of the array.

// for (let i = 0; i < array.length; i++) {
// for (let j = i+1; j < array.length; j++) {
//     if (array[i]> array[j]) {
//        let temp = array[i];
//        array[i] = array[j];
//        array[j] = temp;
//     }            
// }        
// }
 console.log( 'Assending order of the name:'+array.sort());

// reverse of the array.

console.log( 'reverse order of the name:'+array.reverse());

// Find the value from the  array.

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

// length of the each element in an array.

    array.forEach(i =>{
     console.log('Length of '+ i + ':'+i.length);

     // split of array element.

     console.log('split   : ' + i.split(' '));
    })

    // Find the duplicate of the array.

    const findDuplicates = array =>array.filter((i,index)=>array.indexOf(i)!==index)
    const duplicates = findDuplicates(array);
    console.log(duplicates);
    




