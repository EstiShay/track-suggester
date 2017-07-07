$(document).ready(function() {
  // var design = 0
  // var cSharp = 0
  // var ruby = 0
  // var php = 0
  // var andrJava = 0
  $("form#epSurvey").submit(function(event) {
    var answer1 = $("select#end_selection").val()
    var answer2 = $("input:radio[name=webdev]:checked").val()
    var answer3 = $("input:radio[name=mobile]:checked").val()
    var answer4 = $("input:checkbox[name=biztype]:checked").val()
    var answer5 = $("input:radio[name=comfort]:checked").val()


    $("ol").append("end_selection: " + answer1 + "<br />");
    $("ol").append("webdev: " + answer2 + "<br />");
    $("ol").append("mobile: " + answer3 + "<br />");
    $("ol").append("biztype: " + answer4 + "<br />");
    $("ol").append("comfort: " + answer5);

    $("#recs").show();

    event.preventDefault();

  });
  // $("#recs").show();
});
