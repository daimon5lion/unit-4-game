$(document).ready(function() {
  var yourScore = 0;
  var wins = 0;
  var looses = 0;

  var tNumbers = Math.floor(Math.random() * 102 + 19);
  $("#targetnumber").text(tNumbers);

  var c1Numbers = Math.floor(Math.random() * 12 + 1);
  var c2Numbers = Math.floor(Math.random() * 12 + 1);
  var c3Numbers = Math.floor(Math.random() * 12 + 1);
  var c4Numbers = Math.floor(Math.random() * 12 + 1);

  function rest() {
    tNumbers = Math.floor(Math.random() * 102 + 19);
    $("#targetnumber").text(tNumbers);
    c1Numbers = Math.floor(Math.random() * 12 + 1);
    c2Numbers = Math.floor(Math.random() * 12 + 1);
    c3Numbers = Math.floor(Math.random() * 12 + 1);
    c4Numbers = Math.floor(Math.random() * 12 + 1);
    yourScore = 0;
  }

  $("#cr1").on("click", function() {
    yourScore = yourScore + c1Numbers;
    $("#score").text(yourScore);
  });
  $("#cr2").on("click", function() {
    yourScore = yourScore + c2Numbers;
    $("#score").text(yourScore);
  });
  $("#cr3").on("click", function() {
    yourScore = yourScore + c3Numbers;
    $("#score").text(yourScore);
  });
  $("#cr4").on("click", function() {
    yourScore = yourScore + c4Numbers;
    $("#score").text(yourScore);
  });
});
