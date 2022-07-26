// Ativar Links do Menu
const links = document.querySelectorAll(".menu-nav a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }  
}

links.forEach(ativarLink);