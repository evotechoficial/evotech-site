
const produtos = [
  { nome: 'iPhone 15', preco: 6999 },
  { nome: 'Galaxy S24', preco: 5999 },
  { nome: 'Apple Watch Ultra', preco: 8999 },
  { nome: 'Mi Watch', preco: 799 },
  { nome: 'Capa iPhone', preco: 99 }
];

let carrinho = [];

function renderProdutos() {
  const container = document.getElementById('lista-produtos');
  produtos.forEach((prod) => {
    const div = document.createElement('div');
    div.className = 'produto';
    div.innerHTML = `
      <img src="https://via.placeholder.com/200x120" alt="${prod.nome}">
      <h3>${prod.nome}</h3>
      <p>R$ ${prod.preco.toFixed(2)}</p>
      <button onclick="adicionarCarrinho('${prod.nome}', ${prod.preco})">Comprar</button>
    `;
    container.appendChild(div);
  });
}

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const container = document.getElementById('itens-carrinho');
  const totalSpan = document.getElementById('total');
  container.innerHTML = '';
  let total = 0;
  carrinho.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    container.appendChild(div);
    total += item.preco;
  });
  totalSpan.textContent = `R$ ${total.toFixed(2)}`;
}

function mostrarPagamento() {
  document.getElementById('pagamento').style.display = 'block';
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3000);

renderProdutos();
