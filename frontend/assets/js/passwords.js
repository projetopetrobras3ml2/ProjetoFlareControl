document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('userDisplay');
  const email = localStorage.getItem('userEmail');
  if (email) display.textContent = `Acessando como: ${email}`;

  const form = document.getElementById('passwordForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pwd = form.password.value;
    if (!pwd) return alert('Digite sua senha.');

    // (Opcional) validar com sua API aqui...

    // Redireciona para o dashboard
    localStorage.removeItem('userEmail');
    window.location.href = 'dashboard.html';
  });
});
