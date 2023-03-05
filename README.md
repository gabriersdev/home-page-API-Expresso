# Home Page API - Expresso

O projeto é a home page para a API do Expresso Mobilidade (em desenvolvimento). Basicamente este projeto tem como objetivo oferecer aos interessados pela API uma documentação, com exemplos detalhados sobre o uso e as requisoções para a API.

Você pode [acessar o projeto aqui][home_page_api_expresso] ou ver o [protótipo na Behance][prototipo]

## Funcionalidades

- **Menu flutuante em algumas resoluções** <br>
  Usuários com dispositivos em que a largura de tela seja maior que 1100px, podem usar o menu flutuante para navegar entre as seções da página. A navegação ocorre através de tags âncoras (`<a>`) referenciadas através do atributo `id` em algum ponto da página. 

- **Feedback de scroll** <br>
  Conforme o usuário vê as seções da página (definido através de um evento de escuta de scroll), o item correspondente a esta seção no menu flutuante é destacado, mantendo o usuário ciente de que parte da página ele está.

- **Botões de navegação: 🔼 e 🔽** <br>
  A finalidade desses botões é a mesma do menu flutuante, porém com eles não é possível escolher uma seção específica para ir. Você pode:

  - Clicando uma vez em 🔼: ir para a seção anterior
  - Clicando duas vezes em 🔼: ir para o início da página
  - Clicando uma vez em 🔽: ir para a próxima seção
  - Clicando duas vezes em 🔽: ir para o fim da página
  <br><br>

- **Códigos** <br>
  Usando a ferramenta [highlight.js][highlight], os códigos da documentação da API são estilizados conforme a linguagem. Inseri um botão que permite a cópia do trecho de código através do `navigator.clipboard.writeText` do JS.

## Ferramentas

- [highlight.js][highlight]
- [Bootstrap Icons][bootstrap_icons]
- [Google Fonts][fonts_google] (fontes usadas: Inter e JetBrains Mono)

[home_page_api_expresso]:https://gabrieszin.github.io/home-page-API-Expresso/
[prototipo]:https://www.behance.net/gallery/162334387/API-Expresso-Mobilidade
[highlight]:https://highlightjs.org
[bootstrap_icons]:https://icons.getbootstrap.com
[fonts_google]:https://fonts.google.com