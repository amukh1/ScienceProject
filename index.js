let q1 = 'What system are we doing?'
let q2 = 'What are the functions of a rib cage?'
let q3 = 'Whats the pourpose of the skeletal system?'
let q4 = 'What system does the skeletal system work with?'
let q5 = 'Wheres your scalpula?'
let q6 = 'What organs does your skeletal system protect'
let q7 = 'What protects the brain'
let q8 = 'Is Spongy Bone real?'
let q9 = 'What is the Skeletal system?'
let q10 = 'What is the Skeletal system made out of'
let q11 = 'Where is the Skeletal system'
let q12 = 'True OR False: We need the Skeletal system'
let q13 = 'Is the Skeletal system classified as a system?'
let q14 = 'True OR False: The Skeletal system is important'
let q15 = 'Thank You for playing our game!'


let q1o1 = 'Skeletal'
let q1o2 = 'Muscle'
let q1o3 = 'Incorrect'

let q2o1 = 'Help breathe'
let q2o2 = 'Protect lungs'
let q2o3 = 'Protects the brain'

let q3o1 = 'Digests food'
let q3o2 = 'Makes you happy'
let q3o3 = 'It supports your body'

let q4o1 = 'Respatory'
let q4o2 = 'Digestive'
let q4o3 = 'Muscular'

let q5o1 = 'Middle'
let q5o2 = 'Top' //corr
let q5o3 = 'Bottom'

let q6o1 = 'Fingers'
let q6o2 = 'Legs'
let q6o3 = 'Heart, Lungs and brain'

let q7o1 = 'Jaw'
let q7o2 = 'Skull' // MAKE THIS CORRECT
let q7o3 = 'Rib cage'

let q8o1 = `I'm not sure`
let q8o2 = 'NO'
let q8o3 = 'Yes it is' 

let q9o1 = 'A system'
let q9o2 = 'Your lungs'
let q9o3 = 'The system that supports and protects your body'

let q10o1 = 'Bones and Joints' // MAKE THIS CORRECT
let q10o2 = 'Tissue boxes'
let q10o3 = 'Organ systems'

let q11o1 = 'Lower body'
let q11o2 = 'Whole body' // Correct
let q11o3 = 'Higher body'

let q12o1 = 'True' // correct
let q12o2 = 'False'
let q12o3 = 'None'

let q13o1 = 'I dont think so'
let q13o2 = 'No'
let q13o3 = 'Yes' // correct

let q14o1 = 'True' // correct
let q14o2 = 'False' 
let q14o3 = 'None'

let q15o1 = 'Your welcome'
let q15o2 = 'Your welcome' // correct
let q15o3 = 'Your welcome'


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
    correct = 'two'
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
    correct = 'two'
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
    correct = 'one'
}else if(stage == 11){
    question.innerHTML = q11
    o1.innerHTML = q11o1
    o2.innerHTML = q11o2
    o3.innerHTML = q11o3
    correct = 'two'
}else if(stage == 12){
    o3.style.display = 'none'
    o2.style.width = '49.95'
    o1.style.width = '49.95'
    question.innerHTML = q12
    o1.innerHTML = q12o1
    o2.innerHTML = q12o2
    o3.innerHTML = q12o3
    correct = 'two'
}else if(stage == 13){
    question.innerHTML = q13
    o1.innerHTML = q13o1
    o2.innerHTML = q13o2
    o3.innerHTML = q13o3
    correct = 'three'
}else if(stage == 14){
    o3.style.display = 'none'
    o2.style.width = '49.95'
    o1.style.width = '49.95'
    question.innerHTML = q14
    o1.innerHTML = q14o1
    o2.innerHTML = q14o2
    o3.innerHTML = q14o3
    correct = 'two'
}else if(stage == 15){
    question.innerHTML = q15
    o1.innerHTML = q15o1
    o2.innerHTML = q15o2
    o3.innerHTML = q15o3
    correct = 'two'
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
    correct = 'two'
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
    correct = 'two'
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
    correct = 'one'
}else if(stage == 11){
    question.innerHTML = q4
    o1.innerHTML = q4o1
    o2.innerHTML = q4o2
    o3.innerHTML = q4o3
    correct = 'two'
}else if(stage == 12){
    o3.style.display = 'none'
    o2.style.width = '49.95'
    o1.style.width = '49.95'
    question.innerHTML = q12
    o1.innerHTML = q12o1
    o2.innerHTML = q12o2
    o3.innerHTML = q12o3
    correct = 'one'
}else if(stage == 13){
    question.innerHTML = q13
    o1.innerHTML = q13o1
    o2.innerHTML = q13o2
    o3.innerHTML = q13o3
    correct = 'three'
}else if(stage == 14){
    o3.style.display = 'none'
    o2.style.width = '49.95'
    o1.style.width = '49.95'
    question.innerHTML = q14
    o1.innerHTML = q14o1
    o2.innerHTML = q14o2
    o3.innerHTML = q14o3
    correct = 'one'
}else if(stage == 15){
    question.innerHTML = q15
    o1.innerHTML = q15o1
    o2.innerHTML = q15o2
    o3.innerHTML = q15o3
    correct = 'two'
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
    correct = 'two'
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
    correct = 'two'
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
    correct = 'one'
}else if(stage == 11){
    question.innerHTML = q4
    o1.innerHTML = q4o1
    o2.innerHTML = q4o2
    o3.innerHTML = q4o3
    correct = 'two'
}else if(stage == 12){
    o3.style.display = 'none'
    o2.style.width = '49.95'
    o1.style.width = '49.95'
    question.innerHTML = q12
    o1.innerHTML = q12o1
    o2.innerHTML = q12o2
    o3.innerHTML = q12o3
    correct = 'one'
}else if(stage == 13){
    question.innerHTML = q13
    o1.innerHTML = q13o1
    o2.innerHTML = q13o2
    o3.innerHTML = q13o3
    correct = 'three'
}else if(stage == 14){
    o3.style.display = 'none'
    o2.style.width = '49.95'
    o1.style.width = '49.95'
    question.innerHTML = q14
    o1.innerHTML = q14o1
    o2.innerHTML = q14o2
    o3.innerHTML = q14o3
    correct = 'one'
}else if(stage == 15){
    question.innerHTML = q15
    o1.innerHTML = q15o1
    o2.innerHTML = q15o2
    o3.innerHTML = q15o3
    correct = 'two'
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
    correct = 'two'
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
    correct = 'two'
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
    correct = 'one'
}else if(stage == 11){
    question.innerHTML = q4
    o1.innerHTML = q4o1
    o2.innerHTML = q4o2
    o3.innerHTML = q4o3
    correct = 'two'
}else if(stage == 12){
    o3.style.display = 'none'
    o2.style.width = '49.95'
    o1.style.width = '49.95'
    question.innerHTML = q12
    o1.innerHTML = q12o1
    o2.innerHTML = q12o2
    o3.innerHTML = q12o3
    correct = 'one'
}else if(stage == 13){
    question.innerHTML = q13
    o1.innerHTML = q13o1
    o2.innerHTML = q13o2
    o3.innerHTML = q13o3
    correct = 'three'
}else if(stage == 14){
    o3.style.display = 'none'
    o2.style.width = '49.95'
    o1.style.width = '49.95'
    question.innerHTML = q14
    o1.innerHTML = q14o1
    o2.innerHTML = q14o2
    o3.innerHTML = q14o3
    correct = 'one'
}else if(stage == 15){
    question.innerHTML = q15
    o1.innerHTML = q15o1
    o2.innerHTML = q15o2
    o3.innerHTML = q15o3
    correct = 'two'
}

    
    
    }
}