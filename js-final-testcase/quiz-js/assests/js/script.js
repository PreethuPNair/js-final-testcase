// Define quiz questions and answers
const quiz = [
    {
      question: "What is the capital of india?",
      options: ["Trivandrum", "New Delhi", "Pune", "Rajasthan"],
      correctAnswer: "New Delhi"
    },
    {
      question: "How many bones do we have in an ear?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "3"
    },
    {
        question: "Aureolin is a shade of what colort?",
        options: ["Blue", "Rose", "Yellow", "violet"],
        correctAnswer: "Yellow"
      },
  ];
  
  let score = 0;
  
  // Function to display question and options
  function displayQuestion(index) {
    const questionElement = document.getElementById("question");
    const currentQuestion = quiz[index];
    questionElement.innerHTML = currentQuestion.question;
    const options = currentQuestion.options.join("\n");
    const userAnswer = prompt(currentQuestion.question + "\n\n" + options);
    if (userAnswer !== null) {
      checkAnswer(userAnswer, currentQuestion.correctAnswer);
    }
  }
  
  // Function to check the answer
  function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect. The correct answer is: " + correctAnswer);
    }
  }
  
  // Function to start the quiz
  function startQuiz() {
    for (let i = 0; i < quiz.length; i++) {
      displayQuestion(i);
    }
    alert("Quiz completed!\nYour score is: " + score + "/" + quiz.length);
  }
  
  // Event listener for start button
  document.getElementById("start-btn").addEventListener("click", startQuiz);
  