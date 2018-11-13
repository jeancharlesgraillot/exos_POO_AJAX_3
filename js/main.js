// Exo 3

let getValues = document.getElementById('getValues');

function Product(title, catchphrase, description) {
  this.title = title;
  this.catchphrase = catchphrase;
  this.description = description;
}

function FormManager() {

  // Get inputs data
  let title = document.getElementById('title').value;
  let catchphrase = document.getElementById('catchphrase').value;
  let description = document.getElementById('productDescription').value;

  // Function Product call to create a new product
  newProduct = new Product(title, catchphrase, description);

  // An object to create html elements who'll contain product data
  let htmlManager = {

    parentElement: document.getElementById('bodyCard'),

    // A variable to put the new product in a table so that clicking on html button, it'll be replaced
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

    // A function to display created elements
    displayProduct: function (array) {
      let that = this;
      array.forEach(function (productCard) {
        that.createHTMLElement('div', productCard.title, productCard.catchphrase, productCard.description, that.parentElement)
      })
    },

  }
  // Display product cards
  htmlManager.displayProduct(htmlManager.productCards);
}