
const produtos = [
  { nome: "iPhone 15", preco: 6999, imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-select-2023?wid=940&hei=1112&fmt=png-alpha&.v=1692923797000" },
  { nome: "Galaxy S24", preco: 5999, imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-s928-478635-sm-s928bzvdzto-thumb-539871400" },
  { nome: "Apple Watch Ultra", preco: 8999, imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_VW_34FR+watch-case-45-alum-silver-nc-se_VW_34FR_WF_CO_GEO_BR?wid=940&hei=1112&fmt=png-alpha&.v=1660797772022" },
  { nome: "Mi Watch", preco: 799, imagem: "https://m.media-amazon.com/images/I/61fFlG2NprL._AC_SL1500_.jpg" },
  { nome: "Capa iPhone", preco: 99, imagem: "https://m.media-amazon.com/images/I/61Rjp+GTo+L._AC_SL1500_.jpg" }
];

let carrinho = [];

function renderProdutos() {
  const container = document.getElementById("lista-produtos");
  produtos.forEach((prod, index) => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.nome}">
      <h3>${prod.nome}</h3>
      <p>R$ ${prod.preco.toFixed(2)}</p>
      <button onclick="adicionarCarrinho(${index})">Comprar</button>
    `;
    container.appendChild(div);
  });
}

function adicionarCarrinho(index) {
  carrinho.push(produtos[index]);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const container = document.getElementById("itens-carrinho");
  const totalSpan = document.getElementById("total");
  container.innerHTML = "";
  let total = 0;
  carrinho.forEach((item, i) => {
    const div = document.createElement("div");
    div.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerItem(${i})">Remover</button>`;
    container.appendChild(div);
    total += item.preco;
  });
  totalSpan.textContent = `R$ ${total.toFixed(2)}`;
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function mostrarPagamento() {
  document.getElementById("pagamento").style.display = "block";
}

renderProdutos();
