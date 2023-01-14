const prompt=require("prompt-sync")({sigint:true});

let dob = prompt('Enter the DOB: ');
let toDate =  new Date (dob);
let today = new Date("2023-01-13");
console.log(today);
console.log(toDate);
let Difference_In_Time = today.getTime() - toDate.getTime();

var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

var year =Math.floor( Difference_In_Days/( parseInt(365)));
 console.log('Year: ' + year);
 let month =Math.floor((Difference_In_Days-(365*year))/30);
 console.log('Month: ' + month);
 let weeks =Math.floor((Difference_In_Days-((365*year)+(30*month)))/4);
 console.log('Week: ' + weeks);
 let days =Math.floor((Difference_In_Days-((365*year)+(30*month)+(4*weeks))));
 console.log('Day: ' + days);


