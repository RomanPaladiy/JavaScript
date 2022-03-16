function full_sentence() {
    var part_1 = " This";
    var part_2 = " is a";
    var part_3 = " full sentence";
    var part_4 = " just for you.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

