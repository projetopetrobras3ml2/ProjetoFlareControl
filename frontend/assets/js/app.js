// Etapa 1: Captura e valida o e-mail, depois redireciona para a próxima página (senha)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = form.email.value.trim();
    if (!email) return alert('Digite seu e-mail.');
    // Guarda o e-mail localmente e avança
    localStorage.setItem('userEmail', email);
    window.location.href = 'password.html';
  });
});
