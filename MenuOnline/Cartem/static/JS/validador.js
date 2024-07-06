document.getElementById('email').addEventListener('input', function() {
    var emailInput = this.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var feedback = document.getElementById('email-feedback');
  
    if (emailPattern.test(emailInput)) {
      // Correo válido
      feedback.style.display = 'none';
      this.classList.remove('is-invalid');
    } else {
      // Correo inválido
      feedback.style.display = 'block';
      this.classList.add('is-invalid');
    }
  });
  