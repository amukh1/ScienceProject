let q1 = 'What system are we doing?'
let q2 = 'QUESTION NUMBER TWOOOOOO'
let q3 = 'question 3'


let q1o1 = 'Skeletal'
let q1o2 = 'Muscle'
let q1o3 = 'Incorrect'

let q2o1 = 'Incorrect'
let q2o2 = 'Correct'
let q2o3 = 'Incorrect'

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
}


function answerOne() {
    if(correct == 'one'){
        alert('Correct')
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
        window.location.href = "http://127.0.0.1:5500/ending.html";
    }

    
    
    }else {alert('incorrect')}
}

function answerTwo() {
    if(correct == 'two'){
        alert('Correct')
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
        window.location.href = "http://127.0.0.1:5500/ending.html";
    }
    
    

    }else {alert('incorrect')}
}

function answerThree() {
    if(correct == 'three'){
        alert('Correct')
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
        window.location.href = "http://127.0.0.1:5500/ending.html";
    }

    
    
    }else {alert('incorrect')}
}