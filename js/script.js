// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("linkAtivo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Peguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const reposta = document.getElementById(controls);
  reposta.classList.toggle("respostaAtivo");
  const ativa = reposta.classList.contains("respostaAtivo");
  pergunta.setAttribute("aria-expanded", ativa);
}

function clicarPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(clicarPergunta);

// Mudar galeria de imagens

const imagemBicicleta = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function galeriaMudar(event) {
  const mudar = event.currentTarget;
  const media = matchMedia("(min-width: 920px)").matches;
  if (media) {
    galeriaContainer.prepend(mudar);
  }
}

function galeriaClique(event) {
  event.addEventListener("click", galeriaMudar);
}

imagemBicicleta.forEach(galeriaClique);

// Animaçao

if (window.SimpleAnime) {
  new SimpleAnime();
}
