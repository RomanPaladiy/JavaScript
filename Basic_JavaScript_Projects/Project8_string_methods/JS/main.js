function full_sentence() {
    var part_1 = " This";
    var part_2 = " is a";
    var part_3 = " full sentence";
    var part_4 = " just for you.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function to_uppercase() {
    var text = "Hello World!";
    var result = text.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}

function to_search() {
    var text = "This is a white house"
    var position = text.search("white");
    document.getElementById("Search").innerHTML = position;
}

function string_method() {
    var x =182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function Precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function to_fixed() {
    var num = 5.5684;
    var n = num.toFixed();
    document.getElementById("fixed").innerHTML = n;
}

function Value_Of() {
    var text = "Hello World!";
    var result = text.valueOf();
    document.getElementById("Value").innerHTML = result;
}
