const products = [{
    id: 1,
    name: "Lightweight Jacket",
    price: 100.00,
    image: "./img/jaqueta.png",
    descricao: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    categoria: "Camisetas"
},
{
    id: 2,
    name: "Black Hat",
    price: 59.00,
    image: "./img/gorro.png",
    descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    categoria: "Camisetas"
},
{
    id: 3,
    name: "Mask",
    price: 29.00,
    image: "./img/mascara.png",
    descricao: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui...",
    categoria: "Camisetas"
},
{
    id: 4,
    name: "T-Shirt",
    price: 100.00,
    image: "./img/camiseta preta.png",
    descricao: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    categoria: "Camisetas"
},
{
    id: 5,
    name: "Short-Sleeve T-Shirt",
    price: 250.00,
    image: "./img/camiseta branca.png",
    descricao: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais fino...",
    categoria: "Camisetas"
},
{
    id: 6,
    name: "Champion Packable Jacket",
    price: 150.00,
    image: "./img/blusa.png",
    descricao: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de...",
    categoria: "Camisetas"
},
]

function criarCardProduto(products){
    const body = document.querySelector("body")
    const id = products.id
    const name = products.name
    const price = products.price
    const image = products.image
    const descricao = products.descricao
    const categoria = products.categoria

    const main = document.createElement('main')
    const divProdutos = document.createElement('div')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const buttonSecao = document.createElement('button')
    const buttonCarrinho = document.createElement('button')
    const nomeProduto = document.createElement('p')
    const descricaoProduto = document.createElement('p')
    const valorProduto = document.createElement('p')
    
    buttonCarrinho.id = id
    img.src = `${image}`
    buttonSecao.innerText = categoria
    nomeProduto.innerText = `${name}`
    descricaoProduto.innerText = `${descricao}`
    valorProduto.innerText = `R$ ${price}.00`
    buttonCarrinho.innerText = 'adicionar ao carrinho'

    body.appendChild(main)
    main.appendChild(divProdutos)
    divProdutos.classList.add('itemLista')
    divProdutos.append(figure,buttonSecao,buttonCarrinho,nomeProduto,descricaoProduto,valorProduto)
    figure.appendChild(img)
    figure.classList.add('figure')
    img.classList.add('imagemProduto')
    buttonSecao.classList.add('btnSecao')
    nomeProduto.classList.add('nomeProduto')
    descricaoProduto.classList.add('descricaoProduto')
    valorProduto.classList.add('valorProduto')
    buttonCarrinho.classList.add('btnCarrinho')

    return divProdutos

}
const arrayProdutos =[]

function adicionarItens(e){
    let item = e.target
    

    let adicionarItens = item.parentElement
    let precoCarrinho = addItem.querySelector(".price").innerText
    let nomeCarrinho = addItem.querySelector('.nomeProduto').innerText
    let imagemProduto = addItem.querySelector('.imagemProduto').src
}

function percorrerProdutos(name){
    for(let i = 0 ; i < name.lenght; i++){
        criarCardProduto(products[i])
        arrayProdutos.push()
    }
}
criarCardProduto(products)
percorrerProdutos(products)
