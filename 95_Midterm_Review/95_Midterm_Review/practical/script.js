/* When the input field receives input, convert the value from pounds to kilograms */
function weightConverter(valNum) {
    document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
  }

/* When the input field receives input, convert the value from kilograms to pounds */  
function weightConverter(valNum) {
    document.getElementById("outputPounds").innerHTML=valNum*2.2046;
  }

/* When the input field receives input, convert the value from miles to kilometers */
function LengthConverter(valNum) {
    document.getElementById("outputKilometers").innerHTML=valNum/0.62137;
  }

/* When the input field receives input, convert the value from kilometers to miles */
function LengthConverter(valNum) {
    document.getElementById("outputMiles").innerHTML=valNum*0.62137;
  }