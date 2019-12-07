In JavaScript, how do you append a value to an array?  List 4 ways you can find (you may be able to find more) (25% credit).  

<<<<<<< HEAD
Provide example code showing the use of each of the methods you list. (40% credit)

How do you remove a particular member from the array?  Provide small sample. (35% credit)
=======
Answer: 
1. push() method can be used to append values to an array;
2. concat() to add the items of one array to another array;
3. unshift() adds new items to the beginning of an array, and returns the new length;
4. splice() changes the content of an array by removing existing elements and/or adding new elements.


Provide example code showing the use of each of the methods you list. (40% credit)

Answer:
1. push()
var a = [1, 2, 3];
a.push(4, 5);
console.log(a);

2.concat()
var fruits = ["Banana", "Orange"];
var moreFruits = ["Apple", "Mango", "Lemon"];
var allFruits = fruits.concat(moreFruits);

3. unshift()
var a = [1, 2, 3];
a.unshift(4, 5);
console.log(a);

4. splice()
var myFish = ["angel", "clown", "mandarin", "surgeon"];
myFish.splice(4, 0, "nemo");
//array.splice(start, deleteCount, item1, item2, ...)
console.log(myFish);



How do you remove a particular member from the array?  Provide small sample. (35% credit)

Answer: Find the index of the array element you want to remove using indexOf, and then remove that index with splice.

var array = [2, 5, 9];

console.log(array);

var index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

// array = [2, 9]
console.log(array); 



>>>>>>> 61008e95d58d10d863a3d6af4e399bd465c30597
