// Exo 3

// un objet pour créer vos produits
// • un objet pour gérer votre formulaire(récupérer les données des inputs, créer un produits et
// l'insérer dans le DOM)

let getValues = document.getElementById('getValues');




// récupérer les données des inputs, créer un produits et
// l 'insérer dans le DOM

function Product(title, catchphrase, description) {
  this.title = title;
  this.catchphrase = catchphrase;
  this.description = description;
}

//Get inputs data    
let title = document.getElementById('title').value;
let catchphrase = document.getElementById('catchphrase').value;
let description = document.getElementById('productDescription').value;

function FormManager() {

  let title = document.getElementById('title').value;
  let catchphrase = document.getElementById('catchphrase').value;
  let description = document.getElementById('productDescription').value;
  newProduct = new Product(title, catchphrase, description);

  let htmlManager = {
    parentElement: document.getElementById('bodyCard'),
    productCards: [newProduct],
    createHTMLElement: function (element, title, catchphrase, description, parentElement) {

      let boxElement = document.createElement(element)
      boxElement.className = "col-5 m-0 p-0 mx-auto m-2 border border-dark"
      parentElement.appendChild(boxElement)

      let titleElement = document.createElement(element)
      titleElement.className = "col-5 m-0 p-0 text-center "
      titleElement.innerHTML = title
      boxElement.appendChild(titleElement)

      let catchphraseElement = document.createElement(element)
      catchphraseElement.className = "col-5 m-0 pl-2 text-left "
      catchphraseElement.innerHTML = catchphrase
      boxElement.appendChild(catchphraseElement)

      let descriptionElement = document.createElement(element)
      descriptionElement.className = "col-5 m-0 pl-2 text-left"
      descriptionElement.innerHTML = description
      boxElement.appendChild(descriptionElement)

    },

    displayProduct: function (array) {
      let that = this;
      array.forEach(function (productCard) {
        that.createHTMLElement('div', productCard.title, productCard.catchphrase, productCard.description, that.parentElement)
      })
    },

  }
  htmlManager.displayProduct(htmlManager.productCards);
}