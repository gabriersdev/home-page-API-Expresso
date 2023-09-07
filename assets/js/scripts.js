import { conteudos } from "./modulos/conteudos.js";
import { codigos } from "./modulos/codigos.js";
import { navegacao } from "./modulos/navegacao.js";
import { funcaoFooter } from "./modulos/footer.js";

(() => {
  $('.tudo').html(conteudos.principal);
  codigos();
  navegacao();
  funcaoFooter();

  hljs.highlightAll();
  
  window.addEventListener("load", () => {
    const areas = document.querySelectorAll("[data-ano-atual]");
    const dataAtual = new Date();
    areas.forEach(area => {
      area.textContent = `${dataAtual.getFullYear()}`;
    })
    
    // window.location.href = '#apresentacao';
    
    const overlay2 = document.querySelector(".overlay-2");
    overlay2.style.display = "none";
  })
})();