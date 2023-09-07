const conteudos = {
  principal: `
  <header class="cabecalho" id="apresentacao" data-conteudo-secao>
  <section class="cabecalho__principal">
  <h1 class="cabecalho__titulo">Expresso API</h1>
  <mark class="cabecalho__tag">experimental</mark>
  <p class="cabecalho__descricao">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta error debitis doloribus alias. Error autem, alias labore minima ex quod, provident ullam necessitatibus ducimus modi, officia commodi neque? Adipisci? Lorem ipsum dolor sit amet consectetur.
  </p>
  </section>
  </header>
  
  <main>
  <section class="funcoes" id="funcoes" data-conteudo-secao>
  <h2 class="funcoes__titulo">Funções da API</h2>
  
  <ul class="funcoes__lista">
  <li>
  <div class="funcao">
  <h3 class="funcao__titulo">Horários de Partidas</h3>
  <p class="funcao__descricao">Obtenha os horário de partidas das <a href="">linhas atendidas pelo Expresso Mobilidade</a> através de consulta pela linha, endereço ou cidade</p>
  <a href="" class="funcao__link">Demonstração -></a>
  </div>
  </li>
  
  <li>
  <div class="funcao">
  <h3 class="funcao__titulo">Pontos de Parada</h3>
  <p class="funcao__descricao">Obtenha os pontos de parada das linhas atendidas pelo Expresso Mobilidade através de consulta pela linha ou endereço</p>
  <a href="" class="funcao__link">Demonstração -></a>
  </div>
  </li>
  
  <li>
  <div class="funcao">
  <h3 class="funcao__titulo">Consulta de linhas</h3>
  <p class="funcao__descricao">Obtenha uma relação das linhas que transitam por determinada região</p>
  <a href="" class="funcao__link">Demonstração -></a>
  </div>
  </li>
  
  <li>
  <div class="funcao">
  <h3 class="funcao__titulo">Dados básicos das linhas</h3>
  <p class="funcao__descricao">Obtenha os dados das linhas atendidas pelo Expresso Mobilidade (nome, operador, tarifa, tipo e status)</p>
  <a href="" class="funcao__link">Demonstração -></a>
  </div>
  </li>
  </ul>
  </section>
  
  <section class="importacao" id="importacao" data-conteudo-secao>
  <h3 class="importacao__titulo">Importação</h3>
  <p class="importacao__descricao">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta error debitis doloribus alias. Error autem, alias labore minima ex quod, provident ullam necessitatibus ducimus modi, officia commodi neque? Adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit similique aut alias eos odit corporis, consectetur aliquam consequuntur tempore fugit a repudiandae incidunt, ut eveniet minima? Porro, aspernatur similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis doloribus omnis quis maiores delectus quia voluptatibus.
  </p>
  
  <div class='codigos'>
  <pre class="codigo"><code class="python" contentEditable="false" data-conteudo-codigo>
  import unicodedata
  
  x = input("Diga-me a estação que deseja fazer a compra: \n")
  
  x = unicodedata.normalize('NFKD', x).encode('ascii', 'ignore').decode('utf8')
  
  if x.lower() == "verao":
  print("StreamShop,","R$89,99")    
  elif x.lower() == "primavera":
  print("Loajing,", "R$84,00")    
  elif x.lower() == "outono":
  print("Showpping,", "R$73,00")    
  elif x.lower() == "inverno":
  print("Loajing,", "R$139,00")    
  else:
  print("Valor inválido")
  
  </code><button class="codigo__btn-copiar" data-acao-copiar-codigo><i class="bi bi-clipboard"></i></button></pre>
  </div>
  
  <p class="importacao__descricao">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta error debitis doloribus alias. Error autem, alias labore minima ex quod, provident ullam necessitatibus ducimus modi, officia commodi neque? Adipisci? Lorem ipsum dolor sit amet consectetur.
  </p>
  </section>
  
  <section class="demonstracao" id="demonstracao" data-conteudo-secao>
  <h3 class="demonstracao__titulo">Demonstração</h3>
  
  <p class="demonstracao__descricao">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit ab voluptatum odio necessitatibus incidunt minus perspiciatis nihil assumenda quaerat repellat voluptas voluptatibus possimus laudantium, placeat ex quis, amet fugit.
  </p>
  
  <div class='codigos'>
  <pre class="codigo"><code class="html" contentEditable="false" data-conteudo-codigo>
  #Codigo
  
  </code><button class="codigo__btn-copiar" data-acao-copiar-codigo><i class="bi bi-clipboard"></i></button></pre>
  </div>
  
  <p class="demonstracao__descricao">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit ab voluptatum odio necessitatibus incidunt minus perspiciatis nihil assumenda quaerat repellat voluptas voluptatibus possimus laudantium, placeat ex quis, amet fugit.
  </p>
  
  <h4 class="demonstracao__titulo__secundario">Título para o parágrafo</h4>
  
  <div class='codigos'>
  <pre class="codigo"><code class="html" contentEditable="false" data-conteudo-codigo>
  #Codigo
  
  </code><button class="codigo__btn-copiar" data-acao-copiar-codigo><i class="bi bi-clipboard"></i></button></pre>
  </div>
  
  <p class="demonstracao__descricao">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit ab voluptatum odio necessitatibus incidunt minus perspiciatis nihil assumenda quaerat repellat voluptas voluptatibus possimus laudantium, placeat ex quis, amet fugit.
  </p>
  </section>
  
  <section class="diagnostico" id="diagnostico" data-conteudo-secao>
  <h3 class="diagnostico__titulo">Diagnóstico de erros</h3>
  
  <h4 class="diagnostico__titulo__secundario">Título para o parágrafo</h4>
  
  <div class="diagnostico__erro">
  <h5 class="diagnostico__erro__titulo">Título para o parágrafo</h5>
  <p class="diagnostico__erro__descricao">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, maxime ex nam porro, molestias aliquam laudantium quis numquam aperiam dicta eaque aspernatur iure libero voluptates quo, tempore maiores velit consequuntur.
  
  <div class='codigos'>
  <pre class="codigo"><code class="python" contentEditable="false" data-conteudo-codigo>
  import unicodedata
  
  x = input("Diga-me a estação que deseja fazer a compra: \n")
  x = unicodedata.normalize('NFKD', x).encode('ascii', 'ignore').decode('utf8')
  
  </code><button class="codigo__btn-copiar" data-acao-copiar-codigo><i class="bi bi-clipboard"></i></button></pre>
  </div>
  </p>
  </div>
  
  <div class="diagnostico__erro">
  <h5 class="diagnostico__erro__titulo">Título para o parágrafo</h5>
  <p class="diagnostico__erro__descricao">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, maxime ex nam porro, molestias aliquam laudantium quis numquam aperiam dicta eaque aspernatur iure libero voluptates quo, tempore maiores velit consequuntur.
  
  <div class='codigos'>
  <pre class="codigo"><code class="python" contentEditable="false" data-conteudo-codigo>
  import unicodedata
  
  x = input("Diga-me a estação que deseja fazer a compra: \n")
  x = unicodedata.normalize('NFKD', x).encode('ascii', 'ignore').decode('utf8')
  
  </code><button class="codigo__btn-copiar" data-acao-copiar-codigo><i class="bi bi-clipboard"></i></button></pre>
  </div>
  </p>
  </div>
  </section>
  
  <section class="contato" id="contato" data-conteudo-secao>
  <h3 class="contato__titulo">Contato</h3>
  <a href="mailto:mobilidadeexpresso@gmail.com" target="_blank" class="contato__link">mobilidadeexpresso@gmail.com</a>
  </section>
  </main>
  
  <footer>
  <section class="">
  <nav class="box-footer-principal">
  <div>
  <h4>About Us</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do elusmod tempor.</p>
  </div>
  
  <div>
  <h4>Company</h4>
  <a href="" data-evento-mouse>Privacy Policy</a>
  <a href="" data-evento-mouse>Terms & Condition</a>
  <a href="" data-evento-mouse>Latest Blog</a>
  <a href="" data-evento-mouse>App Services</a>
  </div>
  
  <!-- 
  <div>
  <h4>Quick Links</h4>
  <a href="" data-evento-mouse>Home</a>
  <a href="" data-evento-mouse>Facturas</a>
  <a href="" data-evento-mouse>Screamshots</a>
  <a href="" data-evento-mouse>Pricing</a>
  <a href="" data-evento-mouse>Testimanials</a>
  </div>
  -->
  
  <div>
  <h4>Social Pages</h4>
  <a href="" data-evento-mouse>Facebook</a>
  <a href="" data-evento-mouse>Twitter</a>
  <a href="" data-evento-mouse>Instagram</a>
  <a href="" data-evento-mouse>Linkedin</a>
  </div>
  </nav>
  
  </section>
  
  <section class="box-footer-informacoes-adicionais">
  <p>
  <i class="bi bi-c-circle"></i> 
  <span data-ano-atual>2022</span> 
  <span>Expresso Mobilidade</span>
  </p>
  </section>
  </footer>`
}

export {conteudos};