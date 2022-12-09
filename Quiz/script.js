let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "D",
        "answer_2": "r",
        "answer_3": "g",
        "answer_4": "Tim Berner-Lee",
        "right-answer": 4
    },
    {
        "question": "Wer hat das erfunden?",
        "answer_1": "du",
        "answer_2": "ich",
        "answer_3": "wer",
        "answer_4": "keiner",
        "right-answer": 2
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('questionNumber').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question']; 
    document.getElementById('answer_1').innerHTML = question['answer_1']; 
    document.getElementById('answer_2').innerHTML = question['answer_2']; 
    document.getElementById('answer_3').innerHTML = question['answer_3']; 
    document.getElementById('answer_4').innerHTML = question['answer_4']; 
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `question_${['right-answer']}`;

    if (selectedQuestionNumber == question['right-answer']){
        console.log('Richtige Antwort')
        document.getElementById(selection).classList.add('bg-success');
    } else {
        console.log('Falsche Antwort')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
    // let question = questions[currentQuestion];
    // if(question.indexOf(`answer_$(index)`) == question['right-answer']){
    //     alert("Das ist richtig")
    // }
    // else {
    //     alert("Das ist falsch")
    // }
    
}

function nextQuestion(){
    currentQuestion++;
    showQuestion();
}


// let question = questions[CurrentQuestion];
// document.getElementById('questions').innerHTML += `
//         <div class="card-body">
//             Frage: ${question[i]};
//         </div>;
//         `;
// function showQuestion() {
//     let question = questions[CurrentQuestion]
//     for(key in question) {
//         document.getElementById('questions').innerHTML += question[key];
//       }

    // let question = questions[CurrentQuestion];
    // for (for var key in question) {

    //         document.getElementById('questions').innerHTML += `
    //         <div class="card-body">
    //             Frage: ${question[i]};
    //         </div>;
    //         `;
        // } else {
        //     document.getElementById('questions').innerHTML += `    
        //     <div class="card-body">
        //          ${question.[i]};
        //     </div>;
        // `;
 
        // }
        
    // }
    // CurrentQuestion++;

