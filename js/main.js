// Exo 3

// un objet pour créer vos produits
// • un objet pour gérer votre formulaire(récupérer les données des inputs, créer un produits et
// l'insérer dans le DOM)

let getValues = document.getElementById('getValues');



let cardTitle = document.getElementsByClassName('card-title');
let cardCatch = document.getElementsByClassName('card-text');
let cardDesc = document.getElementsByClassName('card-description');

// récupérer les données des inputs, créer un produits et
// l 'insérer dans le DOM

function Product(title, catchphrase, description) {
  this.title = title;
  this.catchphrase = catchphrase;
  this.description = description;
}


function FormManager() {

  //Get inputs data    
  let title = document.getElementById('title').value;
  let catchphrase = document.getElementById('catchphrase').value;
  let description = document.getElementById('productDescription').value;
  newProduct = new Product(title, catchphrase, description);

  let htmlManager = {
    parentElement: document.getElementById('bodyCard'),
    productCards: [newProduct],
    createHTMLElement: function (element, title, catchphrase, description, parentElement) {

      let boxElement = document.createElement(element)
      boxElement.className = "col-12 m-0 p-0 mx-auto m-2 border border-dark"
      parentElement.appendChild(boxElement)

      let titleElement = document.createElement(element)
      titleElement.className = "col-12 m-0 p-0 text-center border border-bottom-dark"
      titleElement.innerHTML = title
      boxElement.appendChild(titleElement)

      let catchphraseElement = document.createElement(element)
      catchphraseElement.className = "col-12 m-0 pl-2 text-left border border-bottom-dark"
      catchphraseElement.innerHTML = catchphrase
      boxElement.appendChild(catchphraseElement)

      let descriptionElement = document.createElement(element)
      descriptionElement.className = "col-12 m-0 pl-2 text-left"
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

// let htmlManager = {

//   parentElement: document.getElementById('userlist'),
//   users: [john, toto, coco],
//   createHTMLElement: function (element, content, parentElement) {
//     let childElement = document.createElement(element)
//     childElement.innerHTML = content
//     parentElement.appendChild(childElement)
//   },
//   displayUser: function (array) {
//     let that = this;
//     this.users.forEach(function (user) {
//       that.createHTMLElement('li', user.fullname(), that.parentElement)
//     })
//   },
// };

// function User(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.fullname = function () {
//     return this.firstname + " " + this.lastname;
//   };
// }

// let john = new User('John', 'Doe');
// let toto = new User('Toto', 'Lebléro');
// let coco = new User('Coco', 'Lastico');