// Scroll suave para seções
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Formulário de contato e redirecionamento para WhatsApp
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
  
  // Exibe mensagem de agradecimento no site
  alert("Obrigado por entrar em contato! Você será redirecionado para o WhatsApp.");
});