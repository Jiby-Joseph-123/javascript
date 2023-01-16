const prompt=require("prompt-sync")({sigint:true});
let array = [];
for (let i = 0; i <5; i++) {
    let fare = parseFloat(prompt('Enter the flight fare in decimal : '));
        for (let j = 0; j < 5; j++) {
            
        
        if(j%2!==0){
        array.push(fare);
        break;
        }
        else{
            array.push(null);
        }
    }
    }
    console.log(array);
//}




