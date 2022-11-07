 
function getAllProductApi(){
    var promise = axios({
        url : 'https://shop.cyberlearn.vn/api/Product?',
        Method: 'GET',
        ResponseType: JSON,
        
    })
    promise.then(function(result){
        console.log(result.data.content);
        renderProduct(result.data.content);
    })
    promise.catch(function(err){
        console.log(err);
    })
}
    getAllProductApi();
function renderProduct(arrProduct){
    var contentHTML='';
    for (var i=0;i<arrProduct.length;i++){
        var product = arrProduct[i];
        contentHTML+=`
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
                  <a class="buy" href="./detail.html?id=${product.id}">Buy now</a>
                  <div class="cost">${product.price}$</div>
                </div>
              </div>
            </div>
        `;
    }
    document.querySelector('#product-list').innerHTML = contentHTML;
}