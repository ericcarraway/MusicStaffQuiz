var userStats = {};
var initializeUserStats = function () {
    userStats = {
        currentQuestion: {},
        currentResponse: '',
        correctAnswers: 0,
        incorrectAnswers: 0,
        totalAnswers: 0,
        percentage: 0,
        quizStartTime: 0,
        quizEndTime: 0,
        quizCompletionTime: 0,
        answersPerMinute: 0,
        speed: 0
    };
};
initializeUserStats();

var questionsToAsk = [];  // global variable

var populateQuestionsToAsk = function () {
    // treble and/or bass
    // lines and/or spaces
    // in the staff and/or below the staff and/or above the staff

    var addAllTreblePitchQuestions = function () {
        questionsToAsk = questionsToAsk.concat(trebleList);
    };

    var addQuestions = function () {
        // var userWantsLineOrSpace = 'both';

        // for (var i = 0; i < arguments.length; i++) {
        //     if (arguments[i] === 'line') {
        //
        //    }
        // }

        for (var i in trebleList) {
            if (trebleList[i].lineOrSpace === 'line') {
                questionsToAsk.push(trebleList[i]);
            }
        }
    };

    var addSpaceTreblePitchQuestions = function () {
        for (var i = 0; i < trebleList.length; i++) {
            if (trebleList[i].lineOrSpace === 'space') {
                questionsToAsk.push(trebleList[i]);
            }
        }
    };

    // populate list of cards based on user options
    // add better control flow for line/space/all/above/in/below

    // addQuestions('lines');
    addSpaceTreblePitchQuestions();
};

populateQuestionsToAsk();

var setNextQuestion = function () {
    var questionsToAskIndexRange = questionsToAsk.length - 1;
    var randomQuestionIndex = Math.floor(Math.random() * questionsToAskIndexRange);
    userStats.currentQuestion = questionsToAsk[randomQuestionIndex];
};

var askQuestion = function () {
    var holder = '';
    holder += '<img alt="question" src="';
    holder += userStats.currentQuestion.imgName;
    holder += '" class="img-rounded" />';
    document.getElementById('question-img').innerHTML = holder;
};

var answerSelected = function (pitch) {
    userStats.currentResponse = pitch;

    // correct response
    if (userStats.currentResponse === userStats.currentQuestion.pitch) {
        userStats.correctAnswers += 1;
    } else {
    // incorrect response
        userStats.incorrectAnswers += 1;
    }
    userStats.totalAnswers += 1;

    userStats.percentage = (userStats.correctAnswers / userStats.totalAnswers) * 100;

    // Math.round rounds to the nearest integer
    // By multiplying by 10, rounding, and dividing by 10, we round to 1 decimal place
    userStats.percentage = Math.round(userStats.percentage * 10) / 10;

    //  TO FIX: inconsistent positioning of percentage element on scoreboard if it's a whole number

    updateScoreboard();
    setNextQuestion();
    askQuestion();
};

var updateScoreboard = function () {
    document.getElementById('num-right-ans').innerHTML = userStats.correctAnswers;
    document.getElementById('num-wrong-ans').innerHTML = userStats.incorrectAnswers;
    document.getElementById('total-answers').innerHTML = userStats.totalAnswers;
    document.getElementById('percentage').innerHTML = userStats.percentage + ' &#37';
};

var startQuiz = function () {
    // clear user data and update the scoreboard
    initializeUserStats();
    updateScoreboard();

    // decide what the first question will be
    setNextQuestion();

    // convert the start button to a stop button
    // will change the function to call to STOPQUIZ
    var stopButtonHtml = '<button type="button" class="btn btn-danger btn-lg btn-block" onclick="stopQuiz();">stop</button>';
    document.getElementById('start-stop-button').innerHTML = stopButtonHtml;

    // start the clock
    userStats.quizStartTime = new Date();
};

var stopQuiz = function () {
    // stop the clock
    userStats.quizEndTime = new Date();

    // convert the stop button to a start button
    // will change the function to call to STARTQUIZ
    var startButtonHtml = '<button type="button" class="btn btn-success btn-lg btn-block" onclick="startQuiz();">start</button>';
    document.getElementById('start-stop-button').innerHTML = startButtonHtml;

    alertTimeData();
};

var alertTimeData = function () {
    // compare exerciseEndTime with exerciseStartTime
    userStats.quizCompletionTime = (userStats.quizEndTime - userStats.quizStartTime) / 1000;  // in seconds

    // words per minute = (number of CORRECT words in passage ÷ typing time (in seconds)) x 60
    userStats.answersPerMinute = (userStats.correctAnswers / userStats.quizCompletionTime) * 60;

    // round to the nearest integer
    userStats.answersPerMinute = Math.round(userStats.answersPerMinute);
    userStats.quizCompletionTime = Math.round(userStats.quizCompletionTime);

    // present data
    alert('You answered ' + userStats.correctAnswers + ' questions correctly in ' + userStats.quizCompletionTime + ' seconds. \n' +
        'You averaged ' + userStats.answersPerMinute + ' correct answers per minute \n' +
        'with ' + userStats.percentage + 'percent accuracy.'
        );
};
