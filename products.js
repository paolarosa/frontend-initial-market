const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
];

/* let tagUl = document.querySelectorAll("ul")
for(let i = 0; i<tagUl.length;i++){
tagUl[i].innerHTML = ``
} */
/* tagUl.innerHTML = `` */


let listFrutas = []
let listBebidas = []
let listHigiene = []

function separateItens(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].category == "Frutas") {
            listFrutas.push(lista[i])
        }
        if (lista[i].category == "Bebidas") {
            listBebidas.push(lista[i])
        }
        if (lista[i].category == "Higiene") {
          listHigiene.push(lista[i])
        }
    }
}

separateItens(products)
let tagMain = document.querySelector(".container")

let tagUlFruta = document.querySelector(".fruits")
let tagUlBebida = document.querySelector(".drinks")
let tagUlHigiene = document.querySelector(".higiene")

/* tagUlFruta.classList.add("ulFruta")
tagUlBebida.classList.add("uLBebida")
tagUlHigiene.classList.add("uLHigiene") */


function addElementos(lista) {
for (let i = 0; i < lista.length; i++) {

let tagLi = document.createElement("li")
let tagImg = document.createElement("img")
let tagTitle = document.createElement("h1")
let tagCategoria = document.createElement("h5")
let tagPrice = document.createElement("strong")

tagLi.classList.add("product")
tagImg.classList.add("product-img")
tagImg.src = lista[i].image
tagTitle.classList.add("product-title")
tagTitle.innerText = `${lista[i].title}`
tagCategoria.classList.add("product-category")
tagCategoria.innerText = `${lista[i].category}`
tagPrice.classList.add("product-price")
tagPrice.innerText = `R$${lista[i].price}`


tagLi.append(tagImg,tagTitle,tagCategoria,tagPrice)
if(lista == listHigiene){
  tagUlHigiene.appendChild(tagLi)
} if(lista == listBebidas){
  tagUlBebida.appendChild(tagLi)
} if(lista == listFrutas){
    tagUlFruta.appendChild(tagLi)
}
}
}
addElementos(listHigiene)
addElementos(listFrutas)
addElementos(listBebidas)