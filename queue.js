const prompt=require("prompt-sync")({sigint:true});
var queue1 = [];
var queue2 = [];
var queue3 = [];
for (let i = 0; i < 10; i++) {
   var pass = prompt("enter the pass:") ;
   if(queue1.length<3){
    queue1.push(pass);
   }
   else if(queue2.length<3){
    queue2.push(pass);
   }
   else if(queue3.length<3){
    queue3.push(pass);
   }
   else
   queue1.shift();
   queue1.pop(pass);

}
// queue1.forEach(element => {
//     console.log(element);
// });
// queue2.forEach(element => {
//     console.log(element);
// });
// queue3.forEach(element => {
//     console.log(element);
// });

console.log(queue1[0]);
