//alert("Bem-vindo(a) ao meu portfólio!");
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

document.getElementById("contato-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nomeContato").value;
    let email = document.getElementById("emailContato").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagemContato").value;
    let feedback = document.getElementById("feedback");

    feedback.textContent = "";
    feedback.className = "";
    feedback.style.color = "red";

    if (nome.length < 3) {
        feedback.textContent = "❌ Nome deve ter pelo menos 3 caracteres.";
        return;
    }

    if (email.indexOf("@") === -1) {
        feedback.textContent = "❌ E-mail inválido. Digite um e-mail válido.";
        return;
    }

    if (assunto.length < 5) {
        feedback.textContent = "❌ Assunto deve ter pelo menos 5 caracteres.";
        return;
    }

    if (mensagem.length < 10) {
        feedback.textContent = "❌ Mensagem deve ter pelo menos 10 caracteres.";
        return;
    }

    feedback.textContent = "✅ Mensagem enviada com sucesso!";
    feedback.style.color = "green";

    this.reset();
});

feedback.className = "erro";
feedback.className = "sucesso";

document.getElementById("nomeContato").addEventListener("input", function() {
    let valor = this.value;
    if (valor.length < 3) {
        document.getElementById("feedback").textContent = "Digite pelo menos 3 caracteres.";
        document.getElementById("feedback").style.color = "red";
    } else {
        document.getElementById("feedback").textContent = "✅ Nome válido!";
        document.getElementById("feedback").style.color = "green";
    }
});