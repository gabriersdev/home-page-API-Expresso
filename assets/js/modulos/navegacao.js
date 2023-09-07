(() => {
  const conteudoSumario = document.querySelector('.conteudo-sumario');

  const linksNavegacao = document.querySelectorAll('[data-navegacao]');
  linksNavegacao.forEach(link => {
    link.addEventListener('click', () => {
      window.location.href = `#${link.dataset.navegacao}`;
    })
  })
  
  const secoesRolagem = new Array();
  const secoes = document.querySelectorAll('[data-conteudo-secao]');
  secoes.forEach((secao, index) => {
    secoesRolagem.push(secao.getAttribute('id'));
  })
  
  const verificarMudancaSecao = () => {
    const secaoNavegadaURL = ((window.location.hash).toLocaleLowerCase()).replaceAll('#', '');    
    const interacaoValida = secaoNavegadaURL !== '' && secoesRolagem.includes(secaoNavegadaURL);
    
    limparClassesItensSumario();

    if(interacaoValida){
      marcarItemAtivo(secaoNavegadaURL);
    }
  }
  
  window.addEventListener('scroll', eventoScroll);

  function eventoScroll(){
    const array = [
      {secao: 'apresentacao', valor: document.querySelector('header.cabecalho').getBoundingClientRect().top},
      {secao: 'funcoes', valor: document.querySelector('section.funcoes').getBoundingClientRect().top},
      {secao: 'importacao', valor: document.querySelector('section.importacao').getBoundingClientRect().top},
      {secao: 'demonstracao', valor: document.querySelector('section.demonstracao').getBoundingClientRect().top},
      {secao: 'diagnostico', valor: document.querySelector('section.diagnostico').getBoundingClientRect().top},
      {secao: 'contato', valor: document.querySelector('section.contato').getBoundingClientRect().top},
    ]

    const valor = 0;
    const maisProximo = array.reduce((a, b) => {return (Math.abs(a.valor - valor) < Math.abs(b.valor - valor) ? a : b)});
    
    // removeEventListener('click', conteudoSumario);

    limparClassesItensSumario();
    marcarItemAtivo(maisProximo.secao);
  };

  const escutaSelecaoSumario = () => {
    conteudoSumario.addEventListener('click', () => {
      // verificarMudancaSecao();
    })
  }
  
  const limparClassesItensSumario = () => {
    const sumario = document.querySelector('.sumario__lista');
    
    const linksSumario = sumario.querySelectorAll('[data-navegacao]');
    linksSumario.forEach(link => {
      link.classList.value = 'sumario__item__link';
    })
  }

  const marcarItemAtivo = (secao) => {
    const secaoAtiva = document.querySelectorAll(`[data-navegacao="${secao}"]`);
    secaoAtiva.forEach(secao => {
      secao.classList.add('ativo');
    })
  }

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
      
      // verificarMudancaSecao();
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
      
      // verificarMudancaSecao();
    })
  })

  escutaSelecaoSumario();
})();