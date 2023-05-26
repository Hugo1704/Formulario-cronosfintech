document.addEventListener('DOMContentLoaded', function() {
    // Obtém o campo de entrada de texto do celular
    const celularInput = document.getElementById('celular');
  
    // Adiciona o evento de digitação ao campo
    celularInput.addEventListener('input', function(event) {
      // Obtém o valor atual do campo
      let valor = event.target.value;
  
      // Remove qualquer caractere que não seja dígito
      valor = valor.replace(/\D/g, '');
  
      // Formata o número de celular
      let celularFormatado = '';
      if (valor.length > 0) {
        celularFormatado += '(' + valor.substring(0, 2) + ')';
      }
      if (valor.length > 2) {
        celularFormatado += ' ' + valor.substring(2, 7);
      }
      if (valor.length > 7) {
        celularFormatado += '-' + valor.substring(7, 11);
      }
  
      // Define o valor formatado no campo
      event.target.value = celularFormatado;
    });
  });

function verificarEntrada() {
    var cidade = document.getElementById("cidade").value;
    if (/\d/.test(cidade)) {
        alert("Por favor, não digite números no campo da cidade.");
    
    }
}
