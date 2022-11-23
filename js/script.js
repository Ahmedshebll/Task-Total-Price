var products = document.querySelectorAll("#product");
var totalProducts = document.getElementById("total-products");
var totalPrice = document.getElementById("total-price");
var btn = document.querySelector("#add");
var allPrice = 0;
var btnTotal = document.getElementById("total");

products.forEach(function (product) {
  product.onclick = function () {
    allPrice += parseInt(product.getAttribute("price"));
    totalProducts.innerHTML += product.textContent + " , ";
  };
});

btnTotal.onclick = function () {
  totalPrice.innerHTML = allPrice;
};
