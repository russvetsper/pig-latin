var pigLatin = function(word){
    var vowels = ["a","e","i","o","u"];
    if (pigLatin =concat()(function(word) {


    }) the firsdt letter is in the vowels array){
      return word + "ay";
    }else{
      return word;
    }
  // if (word ==="a"||word === "e" word=== ||, world === "i" word ====||,"o"||, "u");
}





$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = ($("input#word").val());
    var result = pigLatin(word);
    $("#result").text(result);
  });
});
