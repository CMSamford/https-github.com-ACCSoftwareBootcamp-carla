Write a Javascript loop that will iterate from 40 to 60, both included, and log, if the number is ...

... odd or even.

Hint: think about using the modulus operator in Javascript.

Answer:

for (var x=40; x<=60; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");   
        }
        else {
                console.log(x + " is odd");
        }
}


