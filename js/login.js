/* Modified by PowerChord25, todos los asientos reservados */
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("section-login");

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
      localStorage.setItem("inicioSesion", "true");
      localStorage.setItem("emailUsuario", email);
      window.location.href = "index.html";

    } else {
      alert("Por favor, ingresa email y contraseña");
    }
  });
});