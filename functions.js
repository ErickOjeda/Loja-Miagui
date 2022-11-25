
let itens = [
    {
        nome: "Bola da Copa",
        img: "bola.png",
        preco: 86.3,
        descricao: "Bola utilizada na Copa do Mundo, ideal para utilizar em campo e colecionar"
    },
    {
        nome: "Carrinho da Hot Wheels",
        img: "carrinho.png",
        preco: 5.8,
        descricao: "Carrinho para dar de presente para crianças ou colecionar"
    },
    {
        nome: "Chinelo",
        img: "chinelo.png",
        preco: 19.99,
        descricao: "Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome: "Escorredor de louça",
        img: "escorredor.png",
        preco: 15.2,
        descricao: "Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome: "Espada Medieval",
        img: "espada.png",
        preco: 200.18,
        descricao: "Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome: "Guitarra",
        img: "guitarra.png",
        preco: 1980.99,
        descricao: "Otima para utilizar em bandas de hard rock"
    },
    {
        nome: "Toalha de Banho",
        img: "toalha.png",
        preco: 9.99,
        descricao: "Boa para se secar após o banho"
    },
    {
        nome: "Vinho",
        img: "vinho.png",
        preco: 59.9,
        descricao: "Vinho que harmoniza muito bem com carnes vermelhas"
    }
];

createItens(itens[i]);

function createItens(item) {

    for (var i = 0; i < itens.length; i++) {

        // Onde será colocado o produto
        const onde = document.getElementById("vitrine");

        // Cria a div que vai conter o conteudo 
        const box = document.createElement("div");
        box.className = "item";

        // Cria a tag img já com o link para a imagem
        const img = document.createElement("img");
        img.src = `/img/${item.img}`

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
        let value = document.createTextNode(`R$ ${item.preco}`);
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

}