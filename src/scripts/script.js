document.getElementById("calcular").addEventListener("click", calcularMedia);

function calcularMedia() {
    const inputNota1 = document.getElementById("nota1").value;
    const inputNota2 = document.getElementById("nota2").value;
    const inputCorte = document.getElementById("corte").value;
    const resultado = document.getElementById("resultado");

    resultado.className = "";

    if(inputNota1 === "" || inputNota2 === "" || inputCorte === ""){
        resultado.textContent = "Por favor, preencha todas as notas";
        resultado.classList.add("resultado-erro");
        return;
    }
    

    const nota1 = parseFloat(inputNota1);
    const nota2 = parseFloat(inputNota2);
    const corte = parseFloat(inputCorte);
    
    if(isNaN(nota1) || isNaN(nota2) || isNaN(corte)){
        resultado.textContent = "Por favor, insira números válidos"
        resultado.classList.add("resultado-erro");
        return;
    }

    const media = (nota1 + nota2) / 2;

    if (media >= corte){
        resultado.textContent = `Sua média é ${media}. Parabéns, você foi aprovado! 🎉`;
        resultado.classList.add("resultado-aprovado");
    } else {
        resultado.textContent = `Sua média é ${media}. Infelizmente, você foi reprovado. 😢`;
        resultado.classList.add("resultado-reprovado");
    }
}