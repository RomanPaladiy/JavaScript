//Counts to ten
function count_To_Ten() {
    var digit = "";
    var x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = digit
}
//Specifies the length of the string.
function String_Length() {
    var text = "Hello people of the world.";
    var Length = text.length;
    document.getElementById("Length").innerHTML = Length;
}

var Instruments = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[3] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"Drum", brand:"Yamaha", color:"brown"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1320";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

let car = {
  make: "Tesla ",
  model: "Model S ",
  year: "2022 ",
  color: "Black ",
  description : function() {
    return "The car is a " + this.year + this.color + this.make + this.model;
  }
    
}

function break_loop() {
     let text = "";
     for (let i =0; i < 10; i++) {
       if (i === 3) { break; }
       text += "The number is " + i + "<br>";
       document.getElementById("Break").innerHTML = text;
    }
  }

function continue_loop() {
    let text = "";
    for (let i =0; i < 10; i++) {
      if (i === 3) { continue; }
      text += "The number is " + i + "<br>";
      document.getElementById("Continue").innerHTML = text;
   }
 }