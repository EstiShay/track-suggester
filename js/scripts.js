$(document).ready(function() {
  var design = 0
  var cSharp = 0
  var ruby = 0
  var php = 0
  var andrJava = 0
  $("form#epSurvey").submit(function(event) {
    var answer1 = $("select#end_selection").val()
    var answer2 = $("input:radio[name=webdev]:checked").val()
    var answer3 = $("input:radio[name=mobile]:checked").val()
    var answer4 = $("input:checkbox[name=biztype]:checked").val()
    var answer5 = $("input:radio[name=comfort]:checked").val()

    if (answer1 === "front") {
      design += 3;
      ruby += 2;
      php +=1;
    }
    else if (answer1 === "back") {
      cSharp += 3;
      andrJava += 3;
      php += 3;
      ruby += 1;
    }

    if (answer2 === "Y") {
      design += 2;
      ruby += 2;
      php +=1;
    }
    else if (answer2 === "N") {
      cSharp += 2;
      andrJava += 2;
    }

    if (answer3 === "Y") {
      andrJava += 5;
      ruby += 2;
    }

    // if (answer4.includes("corp")) {
    //   cSharp += 1;
    //   andrJava += 1;
    // }
    // if (answer4.includes("start")) {
    //   ruby += 1;
    //   php += 1;
    // }
    // if (answer4.includes("govt")) {
    //   andrJava += 1;
    //   cSharp += 1;
    //   php += 1;
    // }
    // if (answer4.includes("nonprofit")) {
    //   ruby += 1;
    //   andrJava += 1;
    //   cSharp += 1;
    //   php += 1;
    // }

    if (answer5 === "none") {
      ruby += 1;
      andrJava +=1;
    }




    $("ol").append("design:" + design + "<br />");
    $("ol").append("ruby:" + ruby + "<br />");
    $("ol").append("php:" + php + "<br />");
    $("ol").append("cSharp:" + cSharp + "<br />");
    $("ol").append("andrJava:" + andrJava);
    // $("ol").append("end_selection: " + answer1 + "<br />");
    // $("ol").append("webdev: " + answer2 + "<br />");
    // $("ol").append("mobile: " + answer3 + "<br />");
    // $("ol").append("biztype: " + answer4 + "<br />");
    // $("ol").append("comfort: " + answer5);

    $("#recs").show();

    event.preventDefault();

  });
  // $("#recs").show();
});
