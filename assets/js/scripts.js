(() => {
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