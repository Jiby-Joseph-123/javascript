const prompt=require("prompt-sync")({sigint:true});

let dob = prompt('Enter the DOB: ');

let toDate =  new Date (dob);
let year = toDate.getFullYear();
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log('Leap year')
}
else{
    console.log('Not in Leap year')

}

let today = new Date();
let hours =Math.abs( today.getHours()-toDate.getHours());
console.log('Hours:' + hours);
let Difference_In_Time = today.getTime() - toDate.getTime();

var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

var age =Math.floor( Difference_In_Days/( parseInt(365)));
 console.log('Age: ' + age);
 let month =Math.floor((Difference_In_Days-(365*age))/30);
 console.log('Month: ' + month);
 let weeks =Math.floor((Difference_In_Days-((365*age)+(30*month)))/4);
 console.log('Week: ' + weeks);
 let days =Math.floor((Difference_In_Days-((365*age)+(30*month)+(4*weeks))));
 console.log('Day: ' + days);




