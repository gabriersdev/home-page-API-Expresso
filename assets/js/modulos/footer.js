(() => {
  //Funções que são acionadas quando o usuário passar/tirar o mouse de um elemento
  function internalLink(elemento){
    const icone = document.createElement('i');
    icone.setAttribute('class', 'bi bi-box-arrow-up-left');
    
    elemento.append(icone);
  }
  
  function noLink(elemento){
    const icones = elemento.querySelectorAll('i')
    icones.forEach(icone => {
      icone.remove();
    })
  }
  
  const linksFooter = document.querySelectorAll('[data-evento-mouse]');
  linksFooter.forEach(link => {
    link.addEventListener('mouseover', (evento) => {
      internalLink(evento.target);
    })
    
    link.addEventListener('mouseout', (evento) => {
      noLink(evento.target);
    })
  })
})();