
const quizQuestions = [
      {
          question: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Makeup Language"],
          answer: 0 // Index of the correct option in the options array
      },
      {
          question: "Which HTML tag is used to define an unordered list?",
          options: ["<ul>", "<li>", "<ol>", "<list>"],
          answer: 0
      },
      {
          question: "Which property is used to change the background color of an element in CSS?",
          options: ["color", "background-color", "bgcolor", "background"],
          answer: 1
      },
      {
          question: "Which JavaScript method is used to select an HTML element by its ID?",
          options: ["document.getElementById()", "document.querySelector()", "document.getElementByID()", "document.selectElementById()"],
          answer: 0
      },
      {
          question: "What does CSS stand for?",
          options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
          answer: 0
      },
      {
          question: "Which CSS property is used to control the spacing between lines of text?",
          options: ["line-height", "font-style", "text-align", "margin"],
          answer: 0
      },
      {
          question: "What is the correct syntax for referring to an external script called 'script.js'?",
          options: ["<script src='script.js'>", "<script href='script.js'>", "<script ref='script.js'>", "<script name='script.js'>"],
          answer: 0
      },
      {
          question: "What is the result of the expression '2' + 2 in JavaScript?",
          options: ["'22'", "'4'", "22", "4"],
          answer: 0
      },
      {
          question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
          options: ["title", "alt", "src", "href"],
          answer: 1
      },
      {
          question: "What is the correct way to write a comment in JavaScript?",
          options: ["//This is a comment", "<!--This is a comment-->", "'This is a comment", "/*This is a comment*/"],
          answer: 0
        }
      ];

  let queBox = document.querySelector('.ques');
  let para = document.createElement('p');
  let optBtn1 = document.querySelector('#opt-btn1');
  let optBtn2 = document.querySelector('#opt-btn2');
  let optBtn3 = document.querySelector('#opt-btn3');
  let optBtn4 = document.querySelector('#opt-btn4');
  let counter = 0;
  let userScore = 0;
  
  para.setAttribute('class', 'para-que');
  para.innerText = `${quizQuestions[0].question}`;
  queBox.appendChild(para);

  optBtn1.innerText = quizQuestions[0].options[0];
  optBtn2.innerText = quizQuestions[0].options[1];
  optBtn3.innerText = quizQuestions[0].options[2];
  optBtn4.innerText = quizQuestions[0].options[3];

  
  let optCheck = document.querySelectorAll('.opBtn');
  
  optCheck.forEach(function(opt) {
    opt.addEventListener('click', function() {
        console.log("Button clicked!");
        let optNo = parseInt(opt.id.slice(-1));
        console.log("Clicked option number:", optNo);
        let correctAns = quizQuestions[counter].answer;
        console.log("Correct answer:", correctAns);
        if (correctAns === optNo-1) {
            console.log("Correct option selected!");
            userScore++;
            // let parentDiv = opt.parentNode; // Adjusted to get the grandparent
            opt.style.backgroundColor = "green";
            opt.style.color = "white";
          }
    });
  });

let nextBtn = document.querySelector('#next-btn');
nextBtn.addEventListener('click', ()=>{
    // Increment the counter
    counter++;

    // Check if counter is within the range of quizQuestions
    if (counter < quizQuestions.length) {
        // Update the question and options based on the new counter value
        para.innerText = quizQuestions[counter].question;
        optBtn1.innerText = quizQuestions[counter].options[0];
        optBtn2.innerText = quizQuestions[counter].options[1];
        optBtn3.innerText = quizQuestions[counter].options[2];
        optBtn4.innerText = quizQuestions[counter].options[3];

        // Remove any styles applied to the options from the previous question
        optCheck.forEach((opt) => {
          opt.style.backgroundColor = '';
            opt.style.color = '';
        });
    } else {
      // Reset counter to 0 to start the quiz again
        counter = 0;
        ShowScore(userScore);
        
        // Update the quiz content to display the first question
        para.innerText = quizQuestions[counter].question;
        optBtn1.innerText = quizQuestions[counter].options[0];
        optBtn2.innerText = quizQuestions[counter].options[1];
        optBtn3.innerText = quizQuestions[counter].options[2];
        optBtn4.innerText = quizQuestions[counter].options[3];
        
        // Remove any styles applied to the options from the previous question
        optCheck.forEach((opt) => {
          opt.style.backgroundColor = '';
            opt.style.color = '';
        });
    }
});

const ShowScore = (score)=>{
  alert(`Your final score is : ${score}`);
}

let restartBtn = document.querySelector('#restart');

restartBtn.addEventListener('click', ()=>{
    // Reset counter to 0 to start the quiz again
    counter = 0;
    
    // Update the quiz content to display the first question
    para.innerText = quizQuestions[counter].question;
    optBtn1.innerText = quizQuestions[counter].options[0];
    optBtn2.innerText = quizQuestions[counter].options[1];
    optBtn3.innerText = quizQuestions[counter].options[2];
    optBtn4.innerText = quizQuestions[counter].options[3];
    
    // Remove any styles applied to the options from the previous question
    optCheck.forEach((opt) => {
      opt.style.backgroundColor = '';
        opt.style.color = '';
    });
});



