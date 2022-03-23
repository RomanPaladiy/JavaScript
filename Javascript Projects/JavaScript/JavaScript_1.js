function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " is a great food choice!";
    switch(Foods) {
        case "Sushi":
            Food_Output = "Sushi" + Food_String;
        break;
        case "Pizza":
            Food_Output = "Pizza" + Food_String;
        break;
        case "Ramen":
            Food_Output = "Ramen" + Food_String;
        break;
        case "Tacos":
            Food_Output = "Tacos" + Food_String;
        break;
        case "Burgers":
            Food_Output = "Burgers" + Food_String;
        break;
        default:
        Food_Output = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The Text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
