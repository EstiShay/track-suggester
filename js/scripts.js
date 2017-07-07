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
    var answer4 = $("input:radio[name=biztype]:checked").val()
    var answer5 = $("input:radio[name=comfort]:checked").val()
    // Values are integers

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

    if (answer4 === "corp") {
      cSharp += 1;
      andrJava += 1;
    }
    else if (answer4 === "start") {
      ruby += 1;
      php += 1;
    }
    else if (answer4 === "govt") {
      andrJava += 1;
      cSharp += 1;
      php += 1;
    }
    else if (answer4 === "nonprofit") {
      ruby += 1;
      andrJava +=1;
      cSharp += 1;
      php += 1;
    }

    if (answer5 === "none") {
      ruby += 1;
      andrJava +=1;
    }

    $("ul").append("<li>Design/CSS:" + design + "</li>");
    $("ul").append("<li>Ruby:" + ruby + "</li>");
    $("ul").append("<li>PHP:" + php + "</li>");
    $("ul").append("<li>C#:" + cSharp + "</li>");
    $("ul").append("<li>Android/Java:" + andrJava + "</li>");

    $("#recs").show();

    event.preventDefault();
  });
});
