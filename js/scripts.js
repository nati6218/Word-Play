$(document).ready(function(){
$("form").submit(function (event) {
  event.preventDefault();
  var sentence = $("input#sentence").val();
  var words = sentence.split();
});
$("p #result").text(sentence);
});
console.log(words[3]);
