hljs.highlightAll();

const copiarCodigo = (codigo) => {
  const conteudoCodigo = codigo.textContent;

  try{
    navigator.clipboard.writeText(conteudoCodigo.trim());
    return true;
  }catch(erro){
    console.log(erro);
    return false;
  }

}

const btnCopiarCodigo = document.querySelectorAll('[data-acao-copiar-codigo]');
btnCopiarCodigo.forEach(botao => {
  botao.addEventListener('click', (evento) => {
    const pre = evento.target.closest('pre');
    const code = pre.querySelector('code');

    const iconeNormal = `<i class="bi bi-clipboard"></i>`
    const sucesso = `<i class="bi bi-check2"></i>`;
    const erro = `<i class="bi bi-x-lg"></i>`;

    if(copiarCodigo(code)){
      botao.innerHTML = '';
      botao.classList.toggle('sucesso');
      botao.innerHTML = sucesso;
    }else{
      botao.innerHTML = '';
      botao.classList.toggle('erro');
      botao.innerHTML = erro;
    }

    setTimeout(() => {
      botao.classList.value = 'codigo__btn-copiar';
      botao.innerHTML = iconeNormal;
    }, 2000)
  })
})

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
