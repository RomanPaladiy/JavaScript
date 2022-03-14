// This is a multiplication function.
function multiplication()  {
    var simple_Math = 6 * 8;
    document.getElementById('Math').innerHTML = "6 x 8 = " + simple_Math;
}
// This function divides 2 numbers stated below.
function Division()  {
    var simple_Math = 48 / 6;
    document.getElementById("Math2").innerHTML = "48 / 6 = " + simple_Math;
}
// This function is adding numbers.
function addition_function()  {
    var addition = 2 + 15;
    document.getElementById("Math3").innerHTML = "2 + 15 = " + addition;
}
// This function is subracting one number from another.
function subtraction_Function()  {
    var Subtraction = 356 - 76;
    document.getElementById("Math4").innerHTML = "356 - 76 = " + Subtraction;
}
// This shows mulitple expressions in one button.
function more_math()  {
    var simple_Math = (5 + 6) * 10 / 2 -5;
    document.getElementById("Math5").innerHTML = "5 plus 6, multiplied by 10, divided in half and then subracted by 5 equals " + simple_Math;
}
// This operations show how a remainder is left behind after the equation.
function modulus_Operator()  {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
// This operation makes the number negative.
function negation_Operator()  {
    var x = 15;
    document.getElementById("Math7").innerHTML = -x; 
}
// This number is increasing by 1.
function Increment_Number()  {
var x = 5;
x++;
document.write(x);
document.getElementById("Increment").innerHTML = '5' + x++;
}
// This number is decrementing by 1
function Decrement_Number()  {
var x = 5.25; 
x--;
document.write(x);
document.getElementById("Decrement").innerHTML = '5' + x--;
}
// This displays a random number between 0 and 100 on an alert popup.
window.alert(Math.random() * 100);
document.getElementById("RandomMath").innerHTML = Math.random;