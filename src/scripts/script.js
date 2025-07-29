function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const corte = parseFloat(document.getElementById("corte").value);

    const media = (nota1 + nota2) / 2;

    if (media >= corte){
        result.textContent = 'Sua média é ${media}. Parabéns, você foi aprovado! 🎉';
        result.style.color = "green";
    } else {
        result.textContent = "Sua média é ${media}. Infelizmente, você foi reprovado. 😢";
        result.style.color = "red";
    }
}