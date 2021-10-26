let userCheck = prompt('Password:', 'PASSWORD HERE')

if(userCheck == 'Beinecke2021') {
    // document.getElementById('incorrect').classList.add("hidden")
    alert('Verified!')
} else if(userCheck !== 'Beinecke2021') {
    // document.getElementById('passcheck').classList.add("hidden")
    window.location.replace("http://127.0.0.1/");
}



function startGame() {

    window.location.href = "https://science.amukh1.dev/game.html";

}