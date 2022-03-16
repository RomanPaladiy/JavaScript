var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
    }
Add_numbers_1();
Add_numbers_2();
//Greeting message 
function get_Date() {
    if (new Date().getHours() <18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}


if (5 < 13) {
    document.write("The number on the left is smaller than the number on the right. ")
}
// Else/If function practice
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vite!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}