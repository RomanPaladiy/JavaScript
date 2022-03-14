function multiplication()  {
    var simple_Math = 6 * 8;
    document.getElementById('Math').innerHTML = "6 x 8 = " + simple_Math;
}

function Division()  {
    var simple_Math = 48 / 6;
    document.getElementById("Math2").innerHTML = "48 / 6 = " + simple_Math;
}

function addition_function()  {
    var addition = 2 + 15;
    document.getElementById("Math3").innerHTML = "2 + 15 = " + addition;
}

function subtraction_Function()  {
    var Subtraction = 356 - 76;
    document.getElementById("Math4").innerHTML = "356 - 76 = " + Subtraction;
}

function more_math()  {
    var simple_Math = (5 + 6) * 10 / 2 -5;
    document.getElementById("Math5").innerHTML = "5 plus 6, multiplied by 10, divided in half and then subracted by 5 equals " + simple_Math;
}

function modulus_Operator()  {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator()  {
    var x = 15;
    document.getElementById("Math7").innerHTML = -x; 
}

function Increment_Number()  {
var x = 5;
x++;
document.write(x);
document.getElementById("Increment").innerHTML = '5' + x++;
}

function Decrement_Number()  {
var x = 5.25; 
x--;
document.write(x);
document.getElementById("Decrement").innerHTML = '5' + x--;
}

window.alert(Math.random() * 100);
document.getElementById("RandomMath").innerHTML = Math.random;