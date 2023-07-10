function verificarEdad() {
    var edad = parseInt(document.getElementById('edad').value);
  
    if (edad >= 18) {
      document.getElementById('resultado').textContent = "¡Eres mayor de edad! Puedes comprar cerveza.";
    } else {
      document.getElementById('resultado').textContent = "Lo siento, eres menor de edad. No puedes comprar cerveza.";
    }
  }
  