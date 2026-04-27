cat > public/app.js << 'EOF'
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach((btn, i) => {
    if (i === ['home','calc','goals','sched','log'].indexOf(id)) btn.classList.add('active');
  });
}

function toast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#1c1c26;border:1px solid #00e676;padding:14px 20px;border-radius:10px;z-index:1000;';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
  toast('ShiftWise loaded');
});
EOF
