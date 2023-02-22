(() => {
  hljs.highlightAll();
  
  window.addEventListener("load", () => {
    const areas = document.querySelectorAll("[data-ano-atual]");
    const dataAtual = new Date();
    areas.forEach(area => {
      area.textContent = `${dataAtual.getFullYear()}`;
    })
    
    window.location.href = '#apresentacao';
    
    const overlay2 = document.querySelector(".overlay-2");
    overlay2.style.display = "none";
  })

  window.addEventListener('scroll', () => {
    const posicao = Math.floor(window.scrollY);

    const cabecalho = document.querySelector('header.cabecalho').getBoundingClientRect().top;
    const funcoes = document.querySelector('section.funcoes').getBoundingClientRect().top;
    const importacao = document.querySelector('section.importacao').getBoundingClientRect().top;
    const demonstracao = document.querySelector('section.demonstracao').getBoundingClientRect().top;
    const diagnostico = document.querySelector('section.diagnostico').getBoundingClientRect().top;
    const contato = document.querySelector('section.contato').getBoundingClientRect().top;

    const array = [
      {secao: 'cabecalho', valor: cabecalho},
      {secao: 'funcoes', valor: funcoes},
      {secao: 'importacao', valor: importacao},
      {secao: 'demonstracao', valor: demonstracao},
      {secao: 'diagnostico', valor: diagnostico},
      {secao: 'contato', valor: contato},
    ]

    const valor = 0;
    const maisProximo = array.reduce((a, b) => {return (Math.abs(a.valor - valor) < Math.abs(b.valor - valor) ? a : b)});
    console.log(maisProximo.secao);

    

  });
})();