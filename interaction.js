let ITENS_LOJA = [
    {
        nome: "Bola da Copa",
        preco: 86.30,
        url_img: "./img/bola_copa.webp",
        descricao: "Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome: "Carrinho da Hot Wheels",
        preco: 5.80,
        url_img: "./img/carro_hotwheels.jpeg",
        descricao: "Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome: "Chinelo",
        preco: 19.99,
        url_img: "./img/chinelo.webp",
        descricao: "Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome: "Escorredor de Louça",
        preco: 15.20,
        url_img: "./img/escorredor_louca.webp",
        descricao: "Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome: "Espada Medieval",
        preco: 200.18,
        url_img: "./img/espada_medieval.png",
        descricao: "Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome: "Guitarra",
        preco: 1980.99,
        url_img: "./img/guitarra.webp",
        descricao: "Otima para utilizar em bandas de hard rock"
    },
    {
        nome: "Toalha de Banho",
        preco: 9.99,
        url_img: "./img/toalha_banho.webp",
        descricao: "Boa para se secar apos o banho"
    },
    {
        nome: "Vinho",
        preco: 59.90,
        url_img: "./img/vinho.png",
        descricao: "Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

for (var i = 0; i < ITENS_LOJA.length; i++) {
    createItens(ITENS_LOJA[i]);
}

function createItens(item) {

    // Onde será colocado o produto
    const onde = document.getElementById("itens_section");

    // Cria a div que vai conter o conteudo 
    const box = document.createElement("div");
    box.className = "item";

    // Cria a tag img já com o link para a imagem
    const img = document.createElement("img");
    img.src = item.url_img;

    // Cria a tag div que servirá como titulo
    const titulo = document.createElement("div");
    titulo.className = "titulo";
    let nome = document.createTextNode(item.nome);
    titulo.appendChild(nome);

    // Cria a tag div que vai conter o preço
    const preco = document.createElement("div");
    preco.className = "preco";
    const b = document.createElement("b");
    const text = document.createTextNode("Preco:");
    b.appendChild(text);
    let value = document.createTextNode(` R$ ${item.preco}`);
    preco.appendChild(b);
    preco.appendChild(value);

    // Cria a tag div que vai possuir "Descrição:"
    const desc = document.createElement("div");
    desc.className = "desc";
    let textdesc = document.createTextNode("Descrição:");
    desc.appendChild(textdesc);

    // Cria a tag div que vai conter a descrição do item
    const descricao = document.createElement("div");
    descricao.className = "descricao";
    let textdescricao = document.createTextNode(item.descricao);
    descricao.appendChild(textdescricao);

    // Adiciona os elementos criados para a box
    box.appendChild(img);
    box.appendChild(titulo);
    box.appendChild(preco);
    box.appendChild(desc);
    box.appendChild(descricao);

    // Adiciona a box na vitrine
    onde.appendChild(box);

}
