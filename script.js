// Scroll suave para seções
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Formulário de contato
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Obrigado por entrar em contato! Responderemos em breve.");
});
// Função para enviar mensagem via WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Captura dos valores do formulário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Substitua pelo seu número de WhatsApp
  const whatsappNumber = "5513997833810"; // Exemplo: "5581999999999" para Brasil, Recife

  // Formatação da mensagem
  const whatsappMessage = `Olá, meu nome é ${name}.\nE-mail: ${email}\nMensagem: ${message}`;
  
  // Codificação da URL para redirecionamento seguro
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Redirecionamento para o WhatsApp
  window.open(whatsappURL, "_blank");
});

// Configuração de Partículas e Canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.getElementById("interactive-background").appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 100; // Número de partículas
const mouse = { x: null, y: null, radius: 100 }; // Raio de interação do mouse

// Função para atualizar a posição do mouse
window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

// Função para criar partículas
function createParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
    });
  }
}

// Função para animar partículas e interação com o mouse
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    // Movimento das partículas
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    // Reverter direção se a partícula sair do canvas
    if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

    // Interatividade com o mouse
    const dx = mouse.x - particle.x;
    const dy = mouse.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (mouse.radius - distance) / mouse.radius;
      const moveX = Math.cos(angle) * force * 5;
      const moveY = Math.sin(angle) * force * 5;

      particle.x -= moveX;
      particle.y -= moveY;
    }

    // Desenhar as partículas com cor amarela
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 215, 0, 0.8)"; // Cor amarela (#ffd700)
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}

// Ajustar ao redimensionamento da tela
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createParticles();
});

// Inicializar partículas e animação
createParticles();
animateParticles();
