function verificarNumero() {
    const numero = parseInt(document.getElementById('numero').value);
    const mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = '';
}
if (numero === 5) {
    mensagem.innerHTML = `<div class="cupom">🎉 Você foi premiado com um dia de folga! 🎉</div>`;
  } else if (numero >= 1 && numero <= 10) {
    mensagem.textContent = "Não foi dessa vez! Tente outro número.";
  } else {
    mensagem.textContent = "Por favor, insira um número válido de 1 a 10.";
  }
