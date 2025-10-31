// ---- Relógio (data + hora) ----
function pad(n){ return String(n).padStart(2, '0'); }
function formatDate(d){
  const dias = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
  return `${dias[d.getDay()]}, ${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`;
}
function tick(){
  const now = new Date();
  document.getElementById('dateStr').textContent = formatDate(now);
  document.getElementById('timeStr').textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}
setInterval(tick, 1000);
tick();

// ---- Gráfico simples em Canvas (placeholders ondulados) ----
(function drawWaves(){
  const c = document.getElementById('perfChart');
  const ctx = c.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  // Ajuste para nitidez em high-DPI
  const cssW = c.clientWidth, cssH = c.clientHeight;
  c.width = cssW * dpr; c.height = cssH * dpr; ctx.scale(dpr, dpr);

  // fundo
  ctx.clearRect(0,0,cssW,cssH);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#e5e7eb';
  // grid horizontal
  for(let y=30; y<cssH; y+=40){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(cssW,y); ctx.stroke(); }

  // eixos invisíveis / padding
  const ox = 18, oy = cssH - 20, w = cssW - ox*2, h = cssH - 50;

  function plot(fn, stroke){
    ctx.beginPath();
    for(let x=0; x<=w; x++){
      const t = x / w * Math.PI * 2;
      const y = fn(t);
      const px = ox + x;
      const py = oy - y * h;
      if(x===0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // três ondas para lembrar o mock
  plot(t => (Math.sin(t)*0.28 + 0.35), '#76b39d');  // verde claro
  plot(t => (Math.sin(t+1.3)*0.22 + 0.45), '#d8b48a'); // laranja claro
  plot(t => (Math.sin(t+2.2)*0.26 + 0.30), '#3a9e8a'); // verde água

  // resize responsivo
  window.addEventListener('resize', () => {
    c.width = c.clientWidth * dpr; c.height = c.clientHeight * dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    drawWaves(); // recursivo: redesenha
  }, { once:true }); // registra uma vez e delega ao próximo ciclo (evita looping)
})();
