const prompt=require("prompt-sync")({sigint:true});

var flightNum =[];

var count = 0;
while (count ==0)
{
    console.log("1.Add flight number");
    console.log("2.View");
    console.log("3.quit");


    var input = prompt("Enter the choice:");
   
    switch (input)
    {
        case 1:
            var num = prompt("Enter the flight number:");
            flightNum.push (num);
           
            break;
        case 2:
           flightNum.forEach(element => {
                console.log(element)
            });
            break;
        case 3:
            count=1;
            break;
        default:
           console.log("Invalid");
            break;
    }
}