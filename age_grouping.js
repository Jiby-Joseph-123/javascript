const prompt=require("prompt-sync")({sigint:true});

let array = []
for (var i = 0; i < 2; i++) {
    array[i] = prompt("Enter the dob :")


}
//Console.WriteLine(DateTime.Now.Year);
var today = new Date();
var year = today.getFullYear();

array.forEach(dob => {



    var age = (year -new Date(dob).getFullYear());
    if (age < 10)

        console.log("kid");

    else if (age < 30)
        console.log("youth");
    else if (age < 60)
        console.log("Adult");
    else
        console.log("Older");




});