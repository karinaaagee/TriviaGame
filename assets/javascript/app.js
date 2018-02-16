$(document).ready(function () {

    var count = 0;

    var start;
    $("#startbutton").on("click", startTrivia);

    var seconds = 30;

    var submit;
    $("#submitButton").on("click", scores);

    $("#submitButton").hide();
    $(".scoreboard").hide();

    function startTrivia() {
        var interval = setInterval(timeRemaining, 1000);
        showQuestions()

    }

    function showQuestions() {
        $("#startbutton").hide();
        if (count == allQuestions.length) {

        }
        for (var i = 0; i < allQuestions.length; i++) {
            $("#question" + i).text(allQuestions[i].question)

            for (var j = 0; j < allQuestions[i].answerChoices.length; j++) {

                var input = $("<input id = " + i + j + " name = " + i + " type = 'radio'>").val(allQuestions[i].answerChoices[j])
                var label = $("<label for = " + i + j + ">" + allQuestions[i].answerChoices[j] + "</label>")
                $("#answer" + i).append(input)
                $("#answer" + i).append(label)
            }

        }
        $("#submitButton").show();
        $(".scoreboard").hide();
    }

    var allQuestions = [{
        question: "How many kilograms are there in a metric ton?",
        answerChoices: ["100", "1000", "10,000", "10"],
        answer: 1
    }, {
        question: "The name of the building known as the Taj majal means what?",
        answerChoices: ["Royal Palace", "Rich Palace", "Sacred Place", "Crown Palace"],
        answer: 3
    }, {
        question: "Retinol is another name for what vitamin?",
        answerChoices: ["vitamin A", "vitamin E", "Folic Acid", "vitamin C"],
        answer: 0
    }, {
        question: "Which country is Prague in?",
        answerChoices: ["Czech Republic", "Switzerland", "Norway", "Sweden"],
        answer: 0
    }, {
        question: "How man prime numbers are there between 50 and 70?",
        answerChoices: ["3", "2", "4", "5"],
        answer: 2
    }];
    // timer countdown
    function timeRemaining() {
        if (seconds == 0) {
            $("#timeR").html("<h1>Game Over!</h1>");
        }
        else {
            $("#timeR").html("<h3> Time Remaining:" + seconds + "</h3>");
            seconds--;
        }
    }
    //stops timer
    function stop() {
        clearInterval(timeRemaining);
    }
    // display scoreboard when quiz is submitted
    function scores() {
        var correct = 0
        var incorrect = 0
        var unanswered = 0
        stop()
        for (i = 0; i < allQuestions.length; i++) {
            var userSelect = $('input[name=' + i + ']:checked').val();
            console.log(i, userSelect);
            var currentQuestions = allQuestions[i];
            var correctAnswer = currentQuestions.answerChoices[currentQuestions.answer];
            if(userSelect == undefined){
                unanswered++;
            }
            if (userSelect == correctAnswer) {
                correct++
            }
            else {
                incorrect++
            }
          

        }

        $(".scoreboard").show();
        $(".Ques").hide();

        $("#correctA").text(correct);
        $("#incorrectA").text(incorrect);
        $("#unanswer").text(unanswered);
        

    }



})

