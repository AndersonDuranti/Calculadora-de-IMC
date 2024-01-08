function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    let mensagem = '';
  
    if (!isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) {
      const imc = peso / (altura * altura);
      const resultado = document.getElementById('resultado');
      
      if (imc < 18.5) {
        mensagem = 'Você está abaixo do peso ideal.';
      } else if (imc >= 18.5 && imc < 24.9) {
        mensagem = 'Seu peso está dentro da faixa considerada ideal.';
      } else if (imc >= 24.9 && imc < 29.9) {
        mensagem = 'Você está levemente acima do peso.';
      } else if (imc >= 29.9 && imc < 34.9) {
        mensagem = 'Você está com obesidade grau I.';
      } else if (imc >= 34.9 && imc < 39.9) {
        mensagem = 'Você está com obesidade grau II (severa).';
      } else {
        mensagem = 'Você está com obesidade grau III (mórbida).';
      }
      
      resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>${mensagem}`;
    } else {
      alert('Por favor, insira valores válidos para altura e peso.');
    }
  }
  