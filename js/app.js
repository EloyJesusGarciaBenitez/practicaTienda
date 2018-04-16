$(document).ready(function () {
 var productos;

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

function handleResponse(response) {
 productos = response;
 showProduct(productos);
}

function showProduct(productos) {
	var html= "";
 //console.log(productos.productos[0].nombre);
 for (k in productos.productos) {
   html += 
           
           '<div class="col-3">' + 
           '<img  src=' + productos.productos[k].foto + ' alt="Card image cap">' + 
           
          
           '<p class="card-text">' + productos.productos[k].nombre + '</p>' + 
           
        
           '<p class="card-text">' + productos.productos[k].descripcion + '</p>' + 
           
          
           '<p id="price">Precio: ' + productos.productos[k].precio + '€</p>' +
    
           '<button class="btn btn-primary" onclick="shoppingCart1.addProduct('+[k]+')">añadir al carrito</button>' +
        
           '</div>';








   // html +='<section class="col-md-5 m-1 p-1 float-l   ">' +
   // '<section class="card" style="width: 18rem;">' +
   //              '<img class="card-img-top" src=' + productos.productos[k].foto + ' alt="Card image cap">' +
   //              '<section class="card-body text-center">' +
   //                  '<h5 class="card-title">' + productos.productos[k].nombre + '</h5>' +
   //                  '<p class="card-text">' + productos.productos[k].descripcion + '</p>' +
   //                  /*    '<section class="row">' +
   //                          '<section class="col-sm">' +*/
   //                              '<p id="price">Precio: ' + productos.productos[k].precio + '€</p>' +
   //                          /*'</section>' +
   //                          '<section class="col-sm">' +
   //                              '<p id="stock">' + productsInShop[k].stock + ' Uds</p>' +
   //                          '</section>' +
   //                      '</section>' +*/
   //                  '<button class="btn btn-primary" onclick="shoppingCart1.addProduct('+[k]+')">añadir al carrito</button>' +
   //              '</section>' +
   //              '</section>' +
   //      '</section>';
        //console.log(k + " --- "+ productsInShop[k]);
 }
 document.getElementById('div-compra').innerHTML = html;
}