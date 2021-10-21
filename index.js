let q1 = 'What system are we doing?'
let q2 = 'QUESTION NUMBER TWOOOOOO'
let q3 = 'question 3'
let q4 = 'What system are we doing?'
let q5 = 'QUESTION NUMBER TWOOOOOO'
let q6 = 'question 3'
let q7 = 'What system are we doing?'
let q8 = 'QUESTION NUMBER TWOOOOOO'
let q9 = 'question 3'
let q10 = 'What system are we doing?'
let q11 = 'QUESTION NUMBER TWOOOOOO'
let q12 = 'question 3'
let q13 = 'What system are we doing?'
let q14 = 'QUESTION NUMBER TWOOOOOO'
let q15 = 'question 3'


let q1o1 = 'Skeletal'
let q1o2 = 'Muscle'
let q1o3 = 'Incorrect'

let q2o1 = 'Incorrect'
let q2o2 = 'Correct'
let q2o3 = 'Incorrect'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'

let q3o1 = 'corr'
let q3o2 = 'Incorrect'
let q3o3 = 'notCorrect'

let q3o1 = 'Ineorrect'
let q3o2 = 'cor'
let q3o3 = 'nothteCorrect'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'

let q3o1 = 'Incorrect'
let q3o2 = 'Incorrect'
let q3o3 = 'Correct'


let o1 = document.getElementById('o1')
let o2 = document.getElementById('o2')
let o3 = document.getElementById('o3')

let question = document.getElementById('question')

let stage = 1
let correct;

if(stage == 1){
    question.innerHTML = q1
    o1.innerHTML = q1o1
    o2.innerHTML = q1o2
    o3.innerHTML = q1o3
    correct = 'one'
}else if(stage == 2){
    question.innerHTML = q2
    o1.innerHTML = q2o1
    o2.innerHTML = q2o2
    o3.innerHTML = q2o3
    correct = 'two'
}else if(stage == 3){
    question.innerHTML = q3
    o1.innerHTML = q3o1
    o2.innerHTML = q3o2
    o3.innerHTML = q3o3
    correct = 'three'
}else if(stage == 4){
    question.innerHTML = q4
    o1.innerHTML = q4o1
    o2.innerHTML = q4o2
    o3.innerHTML = q4o3
    correct = 'three'
}else if(stage == 5){
    question.innerHTML = q5
    o1.innerHTML = q5o1
    o2.innerHTML = q5o2
    o3.innerHTML = q5o3
    correct = 'three'
}else if(stage == 6){
    question.innerHTML = q6
    o1.innerHTML = q6o1
    o2.innerHTML = q6o2
    o3.innerHTML = q6o3
    correct = 'three'
}else if(stage == 7){
    question.innerHTML = q7
    o1.innerHTML = q7o1
    o2.innerHTML = q7o2
    o3.innerHTML = q7o3
    correct = 'three'
}else if(stage == 8){
    question.innerHTML = q8
    o1.innerHTML = q8o1
    o2.innerHTML = q8o2
    o3.innerHTML = q8o3
    correct = 'three'
}else if(stage == 9){
    question.innerHTML = q9
    o1.innerHTML = q9o1
    o2.innerHTML = q9o2
    o3.innerHTML = q9o3
    correct = 'three'
}else if(stage == 10){
    question.innerHTML = q10
    o1.innerHTML = q10o1
    o2.innerHTML = q10o2
    o3.innerHTML = q10o3
    correct = 'three'
}else if(stage == 11){
    question.innerHTML = q4
    o1.innerHTML = q4o1
    o2.innerHTML = q4o2
    o3.innerHTML = q4o3
    correct = 'three'
}else if(stage == 12){
    question.innerHTML = q12
    o1.innerHTML = q12o1
    o2.innerHTML = q12o2
    o3.innerHTML = q12o3
    correct = 'three'
}else if(stage == 13){
    question.innerHTML = q13
    o1.innerHTML = q13o1
    o2.innerHTML = q13o2
    o3.innerHTML = q13o3
    correct = 'three'
}else if(stage == 14){
    question.innerHTML = q14
    o1.innerHTML = q14o1
    o2.innerHTML = q14o2
    o3.innerHTML = q14o3
    correct = 'three'
}else if(stage == 15){
    question.innerHTML = q15
    o1.innerHTML = q15o1
    o2.innerHTML = q15o2
    o3.innerHTML = q15o3
    correct = 'three'
}


function answerOne() {
    if(correct == 'one'){
        
    console.log('one')
    stage = stage + 1
    if(stage == 1){
        question.innerHTML = q1
        o1.innerHTML = q1o1
        o2.innerHTML = q1o2
        o3.innerHTML = q1o3
        correct = 'one'
    }else if(stage == 2){
        question.innerHTML = q2
        o1.innerHTML = q2o1
        o2.innerHTML = q2o2
        o3.innerHTML = q2o3
        correct = 'two'
    }else if(stage == 3){
        question.innerHTML = q3
        o1.innerHTML = q3o1
        o2.innerHTML = q3o2
        o3.innerHTML = q3o3
        correct = 'three'
    }else if(stage == 4){
        question.innerHTML = q4
        o1.innerHTML = q4o1
        o2.innerHTML = q4o2
        o3.innerHTML = q4o3
        correct = 'three'
    }else if(stage == 5){
        question.innerHTML = q5
        o1.innerHTML = q5o1
        o2.innerHTML = q5o2
        o3.innerHTML = q5o3
        correct = 'three'
    }else if(stage == 6){
        question.innerHTML = q6
        o1.innerHTML = q6o1
        o2.innerHTML = q6o2
        o3.innerHTML = q6o3
        correct = 'three'
    }else if(stage == 7){
        question.innerHTML = q7
        o1.innerHTML = q7o1
        o2.innerHTML = q7o2
        o3.innerHTML = q7o3
        correct = 'three'
    }else if(stage == 8){
        question.innerHTML = q8
        o1.innerHTML = q8o1
        o2.innerHTML = q8o2
        o3.innerHTML = q8o3
        correct = 'three'
    }else if(stage == 9){
        question.innerHTML = q9
        o1.innerHTML = q9o1
        o2.innerHTML = q9o2
        o3.innerHTML = q9o3
        correct = 'three'
    }else if(stage == 10){
        question.innerHTML = q10
        o1.innerHTML = q10o1
        o2.innerHTML = q10o2
        o3.innerHTML = q10o3
        correct = 'three'
    }else if(stage == 11){
        question.innerHTML = q4
        o1.innerHTML = q4o1
        o2.innerHTML = q4o2
        o3.innerHTML = q4o3
        correct = 'three'
    }else if(stage == 12){
        question.innerHTML = q12
        o1.innerHTML = q12o1
        o2.innerHTML = q12o2
        o3.innerHTML = q12o3
        correct = 'three'
    }else if(stage == 13){
        question.innerHTML = q13
        o1.innerHTML = q13o1
        o2.innerHTML = q13o2
        o3.innerHTML = q13o3
        correct = 'three'
    }else if(stage == 14){
        question.innerHTML = q14
        o1.innerHTML = q14o1
        o2.innerHTML = q14o2
        o3.innerHTML = q14o3
        correct = 'three'
    }else if(stage == 15){
        question.innerHTML = q15
        o1.innerHTML = q15o1
        o2.innerHTML = q15o2
        o3.innerHTML = q15o3
        correct = 'three'
    }

    
    
    }
}

function answerTwo() {
    if(correct == 'two'){
        
    console.log('two')
    stage = stage + 1
    if(stage == 1){
        question.innerHTML = q1
        o1.innerHTML = q1o1
        o2.innerHTML = q1o2
        o3.innerHTML = q1o3
        correct = 'one'
    }else if(stage == 2){
        question.innerHTML = q2
        o1.innerHTML = q2o1
        o2.innerHTML = q2o2
        o3.innerHTML = q2o3
        correct = 'two'
    }else if(stage == 3){
        question.innerHTML = q3
        o1.innerHTML = q3o1
        o2.innerHTML = q3o2
        o3.innerHTML = q3o3
        correct = 'three'
    }else if(stage == 4){
        question.innerHTML = q4
        o1.innerHTML = q4o1
        o2.innerHTML = q4o2
        o3.innerHTML = q4o3
        correct = 'three'
    }else if(stage == 5){
        question.innerHTML = q5
        o1.innerHTML = q5o1
        o2.innerHTML = q5o2
        o3.innerHTML = q5o3
        correct = 'three'
    }else if(stage == 6){
        question.innerHTML = q6
        o1.innerHTML = q6o1
        o2.innerHTML = q6o2
        o3.innerHTML = q6o3
        correct = 'three'
    }else if(stage == 7){
        question.innerHTML = q7
        o1.innerHTML = q7o1
        o2.innerHTML = q7o2
        o3.innerHTML = q7o3
        correct = 'three'
    }else if(stage == 8){
        question.innerHTML = q8
        o1.innerHTML = q8o1
        o2.innerHTML = q8o2
        o3.innerHTML = q8o3
        correct = 'three'
    }else if(stage == 9){
        question.innerHTML = q9
        o1.innerHTML = q9o1
        o2.innerHTML = q9o2
        o3.innerHTML = q9o3
        correct = 'three'
    }else if(stage == 10){
        question.innerHTML = q10
        o1.innerHTML = q10o1
        o2.innerHTML = q10o2
        o3.innerHTML = q10o3
        correct = 'three'
    }else if(stage == 11){
        question.innerHTML = q4
        o1.innerHTML = q4o1
        o2.innerHTML = q4o2
        o3.innerHTML = q4o3
        correct = 'three'
    }else if(stage == 12){
        question.innerHTML = q12
        o1.innerHTML = q12o1
        o2.innerHTML = q12o2
        o3.innerHTML = q12o3
        correct = 'three'
    }else if(stage == 13){
        question.innerHTML = q13
        o1.innerHTML = q13o1
        o2.innerHTML = q13o2
        o3.innerHTML = q13o3
        correct = 'three'
    }else if(stage == 14){
        question.innerHTML = q14
        o1.innerHTML = q14o1
        o2.innerHTML = q14o2
        o3.innerHTML = q14o3
        correct = 'three'
    }else if(stage == 15){
        question.innerHTML = q15
        o1.innerHTML = q15o1
        o2.innerHTML = q15o2
        o3.innerHTML = q15o3
        correct = 'three'
    }
    
    

    }
}

function answerThree() {
    if(correct == 'three'){
        
    console.log('three')
    stage = stage + 1
    if(stage == 1){
        question.innerHTML = q1
        o1.innerHTML = q1o1
        o2.innerHTML = q1o2
        o3.innerHTML = q1o3
        correct = 'one'
    }else if(stage == 2){
        question.innerHTML = q2
        o1.innerHTML = q2o1
        o2.innerHTML = q2o2
        o3.innerHTML = q2o3
        correct = 'two'
    }else if(stage == 3){
        question.innerHTML = q3
        o1.innerHTML = q3o1
        o2.innerHTML = q3o2
        o3.innerHTML = q3o3
        correct = 'three'
    }else if(stage == 4){
        question.innerHTML = q4
        o1.innerHTML = q4o1
        o2.innerHTML = q4o2
        o3.innerHTML = q4o3
        correct = 'three'
    }else if(stage == 5){
        question.innerHTML = q5
        o1.innerHTML = q5o1
        o2.innerHTML = q5o2
        o3.innerHTML = q5o3
        correct = 'three'
    }else if(stage == 6){
        question.innerHTML = q6
        o1.innerHTML = q6o1
        o2.innerHTML = q6o2
        o3.innerHTML = q6o3
        correct = 'three'
    }else if(stage == 7){
        question.innerHTML = q7
        o1.innerHTML = q7o1
        o2.innerHTML = q7o2
        o3.innerHTML = q7o3
        correct = 'three'
    }else if(stage == 8){
        question.innerHTML = q8
        o1.innerHTML = q8o1
        o2.innerHTML = q8o2
        o3.innerHTML = q8o3
        correct = 'three'
    }else if(stage == 9){
        question.innerHTML = q9
        o1.innerHTML = q9o1
        o2.innerHTML = q9o2
        o3.innerHTML = q9o3
        correct = 'three'
    }else if(stage == 10){
        question.innerHTML = q10
        o1.innerHTML = q10o1
        o2.innerHTML = q10o2
        o3.innerHTML = q10o3
        correct = 'three'
    }else if(stage == 11){
        question.innerHTML = q4
        o1.innerHTML = q4o1
        o2.innerHTML = q4o2
        o3.innerHTML = q4o3
        correct = 'three'
    }else if(stage == 12){
        question.innerHTML = q12
        o1.innerHTML = q12o1
        o2.innerHTML = q12o2
        o3.innerHTML = q12o3
        correct = 'three'
    }else if(stage == 13){
        question.innerHTML = q13
        o1.innerHTML = q13o1
        o2.innerHTML = q13o2
        o3.innerHTML = q13o3
        correct = 'three'
    }else if(stage == 14){
        question.innerHTML = q14
        o1.innerHTML = q14o1
        o2.innerHTML = q14o2
        o3.innerHTML = q14o3
        correct = 'three'
    }else if(stage == 15){
        question.innerHTML = q15
        o1.innerHTML = q15o1
        o2.innerHTML = q15o2
        o3.innerHTML = q15o3
        correct = 'three'
    }

    
    
    }
}