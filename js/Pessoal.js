function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

function mostrarPopup() {
  const popup = document.getElementById("popup-certificados");
  popup.style.display = "flex"; // Mostra o popup
}

function fecharPopup() {
  const popup = document.getElementById("popup-certificados");
  popup.style.display = "none"; // Esconde o popup
}

// Fechar o popup ao clicar fora do conteúdo
window.onclick = function(event) {
  const popup = document.getElementById("popup-certificados");
  if (event.target === popup) {
    fecharPopup();
  }
};
