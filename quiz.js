
var user = {
name: "",
//en vez de estar fuera metemos responses dentro
//de user para que sume las respuestas
responses: [],
rightAnswers: 0,
wrongAnswers: 0,
// no entiendo por que metemos la primera funcion dentro de user
function question1() {
  var answer = prompt('What is your name?')
  user.name = answer;

}

function question2() {

  var answer = prompt('Is it JavaScript hard lo learn? (Yes or No)')

  if (answer.toLowerCase() === 'yes') {
    answer = true
  } else if (answer.toLowerCase() === 'no') {
    answer = false
  } else {

    alert("Please answer either Yes or No");
    return answer();
  }
  responses.push(answer); 
}

// no hace falta llamar a la funcion, no?
question2();


function question3 () {

var answer = prompt("Is it JavaScript same as Java? (Yes/No)");

if (answer.toLowerCase() === 'yes') {
    answer = true
  } else if (answer.toLowerCase() === 'no') {
    answer = false
  } else {
  	alert("Please answer either Yes or No");
  	return answer();
  }
  responses.push(answer);
}
question3();



function question4 () {

  var answer = prompt("Which of the following programs was developed in 1995? (JavaScript / Ruby / Python");

    switch (answer.tolowerCase()) {
      case "JavaScript":
      answer = true;
      break;

      case "Ruby":
      answer = false;
      break;

      case "Python":
      answer = false;
      break

      default: 
      alert ("Please enter one of the programas listed.");

      responses.push(answer);
    }
//question4();

function evaluateResponses(responses) {
    for (var i = 0; i<responses.length; i++) {
//comprueba que i esta dentro de responses
//en caso de true, sumalas en rght sino en wrong 
      if (responses[i]=== true) {
        user.rightAnswers++;
      } else { 
        user.wrongAnswers++;
      }
      }
// no entiendo esta llamada
  showResults();
}



function showResults() {
  alert ("You answered " + (user.rightAnswers + user.wrongAnswers) + "questions");
  alert ("Right answers: " + user.rightAnswers);
  alert ("Wrong answers: " + user.wrongAnswers);
}

//esto es el orden de apariencia de las preguntas

user.question1();
console.log(user.name);
user.question2();
console.log(user.responses[0]);
user.question3();
console.log(user.responses[2]);
user.question4();
console.log(user.responses[3]);

//no entiendo esta llamada

evaluateresponses(user.responses);


