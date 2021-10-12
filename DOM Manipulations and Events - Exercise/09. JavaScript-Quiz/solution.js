function solve() {
  const questionnaire = {
    'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
    'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
    'Question #3: What is DOM?': 'A programming API for HTML and XML documents'
  }

  const questionCount = Object.keys(questionnaire).length;
  const sections = Array.from(document.getElementsByTagName('section'));
  let sectionIndex = 0;
  let rightAnswers = 0;

  document.getElementById('quizzie').addEventListener('click', handleAnswer);

  function handleAnswer (ev) {
    const question = ev.target.parentElement.parentElement.parentElement
      .querySelector('.question-wrap h2').textContent;
    
    if (ev.target.textContent == questionnaire[question]) {
      rightAnswers++;
    }

    sections[sectionIndex].style.display = 'none';

    if (sectionIndex < questionCount - 1) {
      sections[++sectionIndex].style.display = 'block';
    } else {
      document.querySelector("#results").style.display = "block";

      document.querySelector('.results-inner h1').textContent = 
        rightAnswers == questionCount ? 'You are recognized as top JavaScript fan!' : `You have ${rightAnswers} right answers`;

      document.getElementById('quizzie').removeEventListener('click', handleAnswer);
    }
  }
}
