let h3 = document.querySelector('h3');
let options = document.querySelectorAll('.option');
let optionsDiv = document.querySelector('.options');
let h2 = document.querySelector('h2');
let paragraph = document.querySelector('p');



function askQuestion() {
    let currentQuestion = quiz.getCurrentQuestion();
    paragraph.innerHTML = 'Pitanje ' + quiz.questionCounter();
    h3.innerHTML = currentQuestion.text;
    for (let i = 0; i < options.length; i++) {
        let option =  currentQuestion.options[i];
        options[i].innerHTML = option;
        options[i].onclick = checkAnswer;
    }
}

askQuestion();

function checkAnswer() {
    quiz.checkAnswer(this.innerHTML);
    if (!quiz.isEnd()) {
        askQuestion();
    } else {
        optionsDiv.style.display = 'none';
        h3.style.display = 'none';
        paragraph.style.display = 'none';
        h2.innerHTML = 'Osvojili ste ' + quiz.score + ' od mogucih ' + quiz.QuestionsTotalPoints() + ' poena.';
        h2.style.display = 'block';
    }
}