const formulario = document.getElementById('formulario');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm_password');
  const fechaNacimiento = document.getElementById('fecha_nacimiento');
  const errorMessages = document.getElementById('error-messages');

  formulario.addEventListener('submit', function(event) {
    errorMessages.innerHTML = '';

    let formIsValid = true;

    // Validación de contraseña
    if (password.value !== confirmPassword.value) {
      formIsValid = false;
      const error = document.createElement('p');
      error.textContent = 'Las contraseñas no coinciden.';
      error.classList.add('error-message');
      errorMessages.appendChild(error);
    }

    // Validación de edad
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento.value);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }

    if (edad < 18) {
      formIsValid = false;
      const error = document.createElement('p');
      error.textContent = 'Debes tener al menos 18 años para registrarte.';
      error.classList.add('error-message');
      errorMessages.appendChild(error);
    }

    if (!formIsValid) {
      event.preventDefault();
    }
  });