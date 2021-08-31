const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



var checkbox = document.getElementById('checkbox')
var i = 0
checkbox.addEventListener('click', () => {
	var fundo = document.querySelector("body")
    var overlay = document.querySelector(".overlay")
    var btn = document.querySelector(".btn")
    var btn2 = document.querySelector(".btnCadastro2")
    var btn3 = document.querySelector(".btnLogin2")
    var tituloForm1 = document.querySelector(".tituloForm1")
    var tituloForm2 = document.querySelector(".tituloForm2")
    var icone1 = document.querySelector(".icone1")
    var icone2 = document.querySelector(".icone2")
    var icone3 = document.querySelector(".icone3")
    var icone4 = document.querySelector(".icone4")
    var icone5 = document.querySelector(".icone5")
    var icone6 = document.querySelector(".icone6")
    var esqueciSenha = document.querySelector(".esqueciSenha")
});