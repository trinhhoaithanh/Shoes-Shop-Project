async function getDetailProductAPI() {
  var idProduct = new URLSearchParams(window.location.search).get("id");
  try {
    var res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`,
      method: "GET",
    });
    renderProduct(res.data.content);
  } catch (err) {
    console.log(err);
  }
}
getDetailProductAPI();

function renderProduct(content) {
  document.getElementById("product-img").src = content.image;
  document.getElementById("product-name").innerHTML = content.name;
  document.getElementById("product-desc").innerHTML = content.description;
  document.getElementById("product-price").innerHTML = content.price + "$";
  document.getElementById("product-quantity").innerHTML = content.quantity;
  var sizeContent = "";
  content.size.forEach((size) => {
    sizeContent += `
      <li class="btn-size">${size}</li>
    `;
  });
  document.getElementById("product-size-list").innerHTML = sizeContent;
  var realateContent = "";
  content.relatedProducts.forEach((product) => {
    realateContent += `
      <div class="col-12 col-sm-12 col-md-6 col-lg-4">
        <div class="product-item">
          <div class="image">
            <img src="${product.image}" alt="image 5" class="w-100"/>
          </div>
          <div class="detail">
            <h2 class="name">${product.name}</h2>
            <p class="descript">${product.shortDescription}</p>
          </div>

          <div class="prices">
            <div class="buy">Buy now</div>
            <div class="cost">${product.price}$</div>
          </div>
        </div>
      </div>
    `;
  });
  document.getElementById("realate-list").innerHTML = realateContent;
}
