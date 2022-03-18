function count_To_Ten() {
    var digit = "";
    var x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = digit
}

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