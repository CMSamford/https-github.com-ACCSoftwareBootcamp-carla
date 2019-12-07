<<<<<<< HEAD
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}
=======
var firstNum = document.getElementById("first")
var secondNum = document.getElementById("second")
var btn = document.querySelector("input[type='submit']")
var msg = document.querySelector("#message")

btn.onclick = function(){
   let answer = multiply(firstNum, secondNum)
   msg.innerText = `The answer is ${answer || ''}`
}

const multiply = function(a, b) {
   console.log(a*b)
} 
>>>>>>> 61008e95d58d10d863a3d6af4e399bd465c30597
