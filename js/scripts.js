$(document).ready(function(){
  $("form").submit(function (event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var words = sentence.split(" ");

    var newArray = words.map(function(word){
      if(word.length >= 3){
        return word;
      }

    });
    var reverseArray = newArray.reverse();
      $("#result").text(reverseArray.join("-"));
      console.log(words);
      console.log(newArray);


  });

});
