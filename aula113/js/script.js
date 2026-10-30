alert("Bem-vindo(a) ao meu portfólio!");
function apresentacao() {
    alert("Olá! Meu nome é David e sou estudante de Desenvolvimento Web.");
}
function alterarTitulo() {
    document.getElementById("titulo-principal").innerHTML = "Portfólio Profissional - " + prompt("Digite seu nome:");
}
function destacarSobre() {
    document.getElementById("sobre").style.backgroundColor = "#7CC8FF";
    document.getElementById("sobre").style.border = "2px solid #2F7FC1";
    document.getElementById("sobre").style.borderRadius = "10px";
}
let clique = 0;

function contarClique() {
    clique = clique + 1;
    document.getElementById("contador").innerHTML = clique;
}
