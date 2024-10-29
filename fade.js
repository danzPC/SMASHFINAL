// JavaScript para ativar o fade-in ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const fadeOverlay = document.querySelector(".fade-overlay");
  
    // Aplica o efeito de fade-in e remove a sobreposição
    setTimeout(() => {
      fadeOverlay.classList.add("hide");
    }, 100); // Pequeno atraso para suavidade
  
    setTimeout(() => {
      fadeOverlay.style.display = "none"; // Remove do DOM após o fade-in
    }, 1600); // Tempo para a transição completa
  });
// Detecta cliques nos links que levam para `about.html`
document.querySelectorAll('a[href*="about.html"]').forEach((link) => {
    link.addEventListener("click", function () {
      localStorage.setItem("slideIn", "true"); // Armazena o estado para aplicar o efeito
    });
  });
  
  // Em `about.html`, aplica a animação se necessário
  document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("slideIn") === "true") {
      document.querySelectorAll('.slide-in').forEach(element => {
        element.classList.add("slide-in");
      });
      localStorage.removeItem("slideIn"); // Limpa o item após o uso
    }
  });

  