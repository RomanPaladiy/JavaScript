// This dictionary is used to create the end sound of woof, and to specify the details.
function my_first_dictionary()  {
    var animal = {
        species:"Dog",
        color:"Brown/Black",
        Breed:"German Shepard",
        Age:7,
        Sound:"Woof"
    };
    delete animal.Sound;
    document.getElementById("Dictionary").innerHTML = animal.Sound;
}