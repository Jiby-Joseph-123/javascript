const prompt=require("prompt-sync")({sigint:true});

var count = 0;
while(count ==0)
{

console.log("F. Enter F for Odd flight numbers");
console.log("W. Enter W for Even flight numbers.");
console.log("Q. Enter Q for Prime flight numbers.");
console.log("N. Enter N for Fibonacci flight numbers.");
console.log("A. Enter A for Amstrong flight numbers.");
console.log("E. Exit");
 var input =prompt("Enter the choice:");

    switch (input)
        {
        case "F":
            for (var i = 100; i < 120; i++)
            {
                if (i % 2 != 0)
                    console.log("F" + i);
            }
            break;
        case "W":
            for (var i = 100; i < 120; i++)
            {
                if (i % 2 == 0)
                console.log("W" + i);
            }
            break;
        case "Q":
            var k;
            for (k = 100; k <= 150; k++)
            {
                count = 0;
                for (var j = 2; j <= k / 2; j++)
                {
                    if (k % j == 0)
                    {
                        count++;
                    }
                }
                if (count == 0)
                {
                    console.log("Q"+k);
                }
               
            }
            break;
        case "N":
            var f1 = 55;
            var f2 = 89;
            var f3 = 0;
            var n = 0;
            while(n<10)
            {
                f3 = f1 + f2;
                f1= f2;
                f2= f3;
                console.log("N" + f3);
                n++;
            }
            break;
        case "A":
            
            for (var i = 100; i < 999; i++)
            {
                var temp = i;
                var reminder = 0;
                var result = 0;
                while(temp!=0)
                {
                    reminder = temp % 10;
                    result += reminder * reminder * reminder;
                    temp /= 10;
                }
                if (result == i)
                {
                   console.log("A" + result);
                }
            }
            break;

        case "E":
            count= 1;
            break;
        default:
         console.log("Invalid choice");
            break;
    }
    

}