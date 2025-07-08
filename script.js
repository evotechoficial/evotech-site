
const produtos = {
  celulares: [
    { nome: "iPhone 15", preco: 6999 },
    { nome: "Galaxy S24", preco: 5999 },
    { nome: "Redmi Note 13", preco: 1599 },
    { nome: "Motorola Edge 40", preco: 1999 },
    { nome: "Huawei P60 Pro", preco: 4999 }
  ],
  tablets: [
    { nome: "iPad Pro", preco: 7999 },
    { nome: "Galaxy Tab S9", preco: 4399 },
    { nome: "Huawei MatePad 11", preco: 3299 },
    { nome: "Lenovo Tab P11", preco: 1899 }
  ],
  acessorios: [
    { nome: "Fone AirPods", preco: 1299 },
    { nome: "Galaxy Buds", preco: 999 },
    { nome: "Capa iPhone", preco: 99 },
    { nome: "Powerbank Xiaomi", preco: 249 }
  ],
  relogios: [
    { nome: "Apple Watch Ultra", preco: 8999 },
    { nome: "Galaxy Watch 6", preco: 1899 },
    { nome: "Mi Watch", preco: 799 },
    { nome: "Huawei Watch GT 4", preco: 1399 },
    { nome: "Amazfit GTS", preco: 999 }
  ]
};

let carrinho = [];

function renderProdutos() {
  for (const categoria in produtos) {
    const container = document.getElementById("produtos-" + categoria);
    produtos[categoria].forEach(prod => {
      const div = document.createElement("div");
      div.className = "produto";
      div.innerHTML = `
        <img src="https://via.placeholder.com/200x150" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
        <p>R$ ${prod.preco.toFixed(2)}</p>
        <button onclick="adicionarCarrinho('${prod.nome}', ${prod.preco})">Comprar</button>
      `;
      container.appendChild(div);
    });
  }
}

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const container = document.getElementById("itens-carrinho");
  const total = document.getElementById("total");
  container.innerHTML = "";
  let soma = 0;
  carrinho.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    container.appendChild(div);
    soma += item.preco;
  });
  total.textContent = `R$ ${soma.toFixed(2)}`;
}

function finalizarCompra() {
  alert("Redirecionando para PagSeguro/MercadoPago...");
  // Aqui futuramente entraria a integração real com links de pagamento
}

renderProdutos();
