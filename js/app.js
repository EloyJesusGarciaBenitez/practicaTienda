$(document).ready(function () {


  $.ajax({
    url: "json/tienda.json",
    type: "GET",
    dataType: "JSON",
    success: handleResponse,
    error: function (data) {
      console.log(data);
    }
  });
});

var ShoppingCart = function () {
  this.products = [];
}

ShoppingCart.prototype.addProduct = function (product) {
  console.log(`Añadió ${product.nombre} al carro, su precio es ${product.precio}€`);
  this.products.push(product);
  shoppingCart1.buy();

	/*	for (var i = 0, l = this.products; i < l.length; i++) {
			htmlC +=l[i].name + ' ' + l[i].price;
		}*/
}

ShoppingCart.prototype.removeProduct = function(product) {
  this.products.splice(product,1);
}

var Product = function (id, name, price, stock, description, img) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.stock = stock;
  this.description = description;
  this.img = img;
}


var productos;
function handleResponse(response) {
  productos = response;
  showProduct(productos);
}

var shoppingCart1 = new ShoppingCart();


ShoppingCart.prototype.buy = function (product) {
  var htmlC = "";
  var htmlT = "";
  var count = 0;
  var total = 0;
  this.products.forEach(function (product) {
    total = total + product.precio;
    count++;
    htmlC += '<section class="col-md">' +
      // product.nombre + ' ' + 'Precio: ' +product.precio+'€' +
      ` Art.: ${product.nombre}     Precio: ${product.precio}€    Cant.: ${count}
      <button class="btn btn-danger" onclick="shoppingCart1.removeProduct(products)">X</button>` +
      '</section>';
    return total;
  })

  htmlT += '<section class="col-md-4 ">' +
    'Precio Total: ' + total +
    '</section>';

  document.getElementById('carrito').innerHTML = htmlC;
  document.getElementById('total').innerHTML = htmlT;
}


function showProduct(productos) {
  var html = "";
  //console.log(productos.productos[0].nombre);
  for (k in productos.productos) {
    html += '<div class="col-md-6">' +
      '<div class="card text-center m-1 p-1">' +
      '<img class="card-img-top" src=' + productos.productos[k].foto + ' alt="Card image cap">' +
      '<div class="card-block">' +
      '<p class="card-text">' + productos.productos[k].nombre + '</p>' +
      '<p class="card-text">' + productos.productos[k].descripcion + '</p>' +
      '<p id="price">Precio: ' + productos.productos[k].precio + '€</p>' +
      '</div>' +
      '<div class="card-footer">' +
      '<button class="btn btn-primary" onclick="shoppingCart1.addProduct(productos.productos[' + [k] + '])">añadir al carrito</button>' +
      '</div>' +
      '</div>' +
      '</div>';
  }
  document.getElementById('productos').innerHTML = html;
}

