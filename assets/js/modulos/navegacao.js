(() => {
  const linksNavegacao = document.querySelectorAll('[data-navegacao]');
  linksNavegacao.forEach(link => {
    link.addEventListener('click', () => {
      window.location.href = `#${link.dataset.navegacao}`
    })
  })
  
  const secoesRolagem = new Array();
  const secoes = document.querySelectorAll('[data-conteudo-secao]');
  secoes.forEach((secao, index) => {
    secoesRolagem.push(secao.getAttribute('id'));
  })
  
  const verificarMudancaSecao = () => {
    const secaoNavegadaURL = ((window.location.hash).toLocaleLowerCase()).replaceAll('#', '');
    const sumario = document.querySelector('.sumario__lista');
    
    const linksSumario = sumario.querySelectorAll('[data-navegacao]');
    linksSumario.forEach(link => {
      link.classList.value = 'sumario__item__link';
    })
    
    const interacaoValida = secaoNavegadaURL !== '' && secoesRolagem.includes(secaoNavegadaURL);
    
    if(interacaoValida){
      const secaoAtiva = document.querySelectorAll(`[data-navegacao="${secaoNavegadaURL}"]`);
      secaoAtiva.forEach(secao => {
        secao.classList.toggle('ativo');
      })
    }
  }
  
  document.querySelector('.conteudo-sumario').addEventListener('click', () => {
    verificarMudancaSecao();
  })
  
  const acoesNavegacao = document.querySelectorAll('[data-acao-navegacao]');
  acoesNavegacao.forEach(acao => {
    
    const tipo = acao.dataset.acaoNavegacao;
    
    acao.addEventListener('dblclick', () => {
      if(tipo == 'anterior'){
        window.location.href = `#${secoesRolagem[0]}`;
      }
      else if(tipo == 'posterior'){
        window.location.href = `#${secoesRolagem[(secoesRolagem.length - 1)]}`;
      }
      
      verificarMudancaSecao();
    })
    
    acao.addEventListener('click', () => {
      const secaoNavegadaURL = ((window.location.hash).toLocaleLowerCase()).replaceAll('#', '');
      const interacaoValida = secaoNavegadaURL !== '' && secoesRolagem.includes(secaoNavegadaURL)
      
      if(interacaoValida){
        const indexRolagem = (secoesRolagem.indexOf(secaoNavegadaURL));
        
        if(tipo == 'anterior' && (indexRolagem - 1 >= 0)){
          window.location.href = `#${secoesRolagem[(indexRolagem - 1)]}`;
        }
        else if(tipo == 'posterior' && (indexRolagem + 1 < secoesRolagem.length)){
          window.location.href = `#${secoesRolagem[(indexRolagem + 1)]}`;
        }
      }
      
      verificarMudancaSecao();
    })
  })
})();