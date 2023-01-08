function SearchProduct(e)
{
    let letterSearch=e.toLowerCase();
    console.log(letterSearch);
    var HttpRequestPage = new XMLHttpRequest();
    HttpRequestPage.open("GET","./js/data.json");
    HttpRequestPage.onreadystatechange = function()
    {
        if (HttpRequestPage.readyState == 4 && HttpRequestPage.status == 200)
        {
            var Response=HttpRequestPage.response;
            var dataParse=JSON.parse(Response);
            data=dataParse.products;
            let carton='';
            for (let i = 0; i < data.length; i++)
            {
                let SearchProduct=data[i].brand.toLowerCase();
                if (letterSearch==SearchProduct)
                {
                    carton+=`    
                        <div class="col-lg-3 mt-5">
                          <div class=" item card ">
                            <div class="category rounded-pill  w-75 ps-2">
                                <h5 class=" ">${data[i].category}</h5> 
                            </div>
                            <div class="discount text-center d-flex justify-content-center align-items-center">
                                <h6> salle <span> ${data[i].discountPercentage}<i class="fa-solid fa-percent"></i></span></h6>
                            </div>
                
                            <div class="dsImges mt-2 overflow-hidden ">
                                <img id="img-top" src="${data[i].thumbnail}" class="card-img-top mx-auto" alt="...">
                            </div>              
                
                            <div class="card-body">
                              <p class="card-text">${data[i].description}</p>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-between">
                                    <h6  class="title-products">${data[i].title}</h6>
                                    <p> price : <span class="price-amount"> ${data[i].price}<i class="fa-solid fa-sack-dollar fa-4 text-secondary"></i> </span> </p>
                                </div>
                
                                <div class="d-flex justify-content-between">
                                    <h6> ${data[i].brand}</h6>
                                    <div class="position-static me-4 end-0">
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star-half-stroke text-warning"></i>
                                        <i class="fa-regular fa-star text-warning"></i>
                                        <i class="fa-regular fa-star text-warning"></i>
                                    </div>
                                </div>
                
                            </div>
                            <i  onclick="testX(this)" class="fa-solid fa-cart-plus " id="cart-plus"></i>
                
                          </div>
                          
                        </div> `
                    document.getElementById("SEARCH").innerHTML=carton;
                    
                }
            }            
        }
    }
    HttpRequestPage.send();
}

// =======================================================================

var data;

function getDatajson()
{
    var HttpRequestPage = new XMLHttpRequest();
    HttpRequestPage.open("GET","./js/data.json");
    HttpRequestPage.onreadystatechange = function () {
        if (HttpRequestPage.readyState == 4 && HttpRequestPage.status == 200) {
            var Response=HttpRequestPage.response;
            var dataParse=JSON.parse(Response);
            data=dataParse.products;
            // console.log(data);
            Phone();
            laptop();
            Fragrance();
            skincare();
            groceries();
            Home();
        }
    }
    HttpRequestPage.send();
}
getDatajson();

// ==================================================================


function Phone()
{
    let cartona=''
    for( let i=0;i<4;i++)
    {
        cartona+=`

        <div class="col-lg-3">
          <div class=" item card ">
            <div class="category rounded-pill  w-75 ps-2">
                <h5 class=" ">${data[i].category}</h5> 
            </div>
            <div class="discount text-center d-flex justify-content-center align-items-center">
                <h6> salle <span> ${data[i].discountPercentage}<i class="fa-solid fa-percent"></i></span></h6>
            </div>

            <div class="dsImges mt-2 overflow-hidden ">
                <img id="img-top" src="${data[i].thumbnail}" class="card-img-top mx-auto" alt="...">
            </div>

           

            <div class="card-body">
              <p class="card-text">${data[i].description}</p>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-between">
                    <h6  class="title-products">${data[i].title}</h6>
                    <p> price : <span class="price-amount"> ${data[i].price}<i class="fa-solid fa-sack-dollar fa-4 text-secondary"></i> </span> </p>
                </div>

                <div class="d-flex justify-content-between">
                    <h6> ${data[i].brand}</h6>
                    <div class="position-static me-4 end-0">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star-half-stroke text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                    </div>
                </div>

            </div>
            <i  onclick="testX(this)" class="fa-solid fa-cart-plus " id="cart-plus"></i>

          </div>
        </div>  `
        // console.log(i);
        document.getElementById("ProductPhone").innerHTML=cartona

    }
    
}

function laptop()
{
    let cartona=''
    for( let i=5;i<9;i++)
    {
        cartona+=`

        <div class="col-lg-3">
          <div class=" item card ">
            <div class="category rounded-pill  w-75 ps-2">
                <h5 class=" ">${data[i].category}</h5> 
            </div>
            <div class="discount text-center d-flex justify-content-center align-items-center">
                <h6> salle <span> ${data[i].discountPercentage}<i class="fa-solid fa-percent"></i></span></h6>
            </div>

            <div class="dsImges mt-2 overflow-hidden ">
                <img src="${data[i].thumbnail}" class="card-img-top mx-auto" alt="...">
            </div>
            <div class="card-body">
              <p class="card-text">${data[i].description}</p>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-between">
                    <h6  class="title-products">${data[i].title}</h6>
                    <p> price : <span class="price-amount"> ${data[i].price}<i class="fa-solid fa-sack-dollar fa-4 text-secondary"></i> </span> </p>
                </div>

                <div class="d-flex justify-content-between">
                    <h6> ${data[i].brand}</h6>
                    <div class="position-static me-4 end-0">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star-half-stroke text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                    </div>
                </div>

            </div>
            <i  onclick="testX(this)" class="fa-solid fa-cart-plus " id="cart-plus"></i>

          </div>
        </div>  `
        // console.log(i);
        document.getElementById("ProductLaptop").innerHTML=cartona ;

    }
    
}

function Fragrance()
{
    let cartona=''
    for( let i=10;i<14;i++)
    {
        cartona+=`

        <div class="col-lg-3">
          <div class=" item card ">
            <div class="category rounded-pill  w-75 ps-2">
                <h5 class=" ">${data[i].category}</h5> 
            </div>
            <div class="discount text-center d-flex justify-content-center align-items-center">
                <h6> salle <span> ${data[i].discountPercentage}<i class="fa-solid fa-percent"></i></span></h6>
            </div>

            <div class="dsImges mt-2 overflow-hidden ">
                <img src="${data[i].thumbnail}" class="card-img-top mx-auto" alt="...">
            </div>
            <div class="card-body">
              <p class="card-text">${data[i].description}</p>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-between">
                    <h6  class="title-products">${data[i].title}</h6>
                    <p> price : <span class="price-amount"> ${data[i].price}<i class="fa-solid fa-sack-dollar fa-4 text-secondary"></i> </span> </p>
                </div>

                <div class="d-flex justify-content-between">
                    <h6> ${data[i].brand}</h6>
                    <div class="position-static me-4 end-0">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star-half-stroke text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                    </div>
                </div>
            </div>
            <i  onclick="testX(this)" class="fa-solid fa-cart-plus " id="cart-plus"></i>
          </div>
        </div>  `
        // console.log(i);
        document.getElementById("ProductFragrance").innerHTML=cartona ;

    }
}

function skincare()
{
    let cartona=''
    for( let i=15;i<19;i++)
    {
        cartona+=`

        <div class="col-lg-3">
          <div class=" item card ">
            <div class="category rounded-pill  w-75 ps-2">
                <h5 class=" ">${data[i].category}</h5> 
            </div>
            <div class="discount text-center d-flex justify-content-center align-items-center">
                <h6> salle <span> ${data[i].discountPercentage}<i class="fa-solid fa-percent"></i></span></h6>
            </div>

            <div class="dsImges mt-2 overflow-hidden ">
                <img src="${data[i].thumbnail}" class="card-img-top mx-auto" alt="...">
            </div>
            <div class="card-body">
              <p class="card-text">${data[i].description}</p>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-between">
                    <h6  class="title-products">${data[i].title}</h6>
                    <p> price : <span class="price-amount"> ${data[i].price}<i class="fa-solid fa-sack-dollar fa-4 text-secondary"></i> </span> </p>
                </div>

                <div class="d-flex justify-content-between">
                    <h6> ${data[i].brand}</h6>
                    <div class="position-static me-4 end-0">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star-half-stroke text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                    </div>
                </div>
            </div>
            <i  onclick="testX(this)" class="fa-solid fa-cart-plus " id="cart-plus"></i>
          </div>
        </div>  `
        // console.log(i);
        document.getElementById("ProductSkincare").innerHTML=cartona ;

    }
}

function groceries()
{
    let cartona=''
    for( let i=20;i<24;i++)
    {
        cartona+=`

        <div class="col-lg-3">
          <div class=" item card ">
            <div class="category rounded-pill  w-75 ps-2">
                <h5 class=" ">${data[i].category}</h5> 
            </div>
            <div class="discount text-center d-flex justify-content-center align-items-center">
                <h6> salle <span> ${data[i].discountPercentage}<i class="fa-solid fa-percent"></i></span></h6>
            </div>

            <div class="dsImges mt-2 overflow-hidden ">
                <img src="${data[i].thumbnail}" class="card-img-top mx-auto" alt="...">
            </div>
            <div class="card-body">
              <p class="card-text">${data[i].description}</p>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-between">
                    <h6 class="title-products">${data[i].title}</h6>
                    <p> price : <span class="price-amount"> ${data[i].price}<i class="fa-solid fa-sack-dollar fa-4 text-secondary"></i> </span> </p>
                </div>

                <div class="d-flex justify-content-between">
                    <h6> ${data[i].brand}</h6>
                    <div class="position-static me-4 end-0">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star-half-stroke text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                    </div>
                </div>
            </div>
            <i  onclick="testX(this)" class="fa-solid fa-cart-plus  " id="cart-plus"></i>
          </div>
        </div>  `
        // console.log(i);
        document.getElementById("ProductGroceries").innerHTML=cartona ;

    }
}

function Home()
{
    let cartona=''
    for( let i=25;i<29;i++)
    {
        cartona+=`
        <div class="col-lg-3">
          <div class=" item card ">
            <div class="category rounded-pill  w-75 ps-2">
                <h5 class=" ">${data[i].category}</h5> 
            </div>
            <div class="discount text-center d-flex justify-content-center align-items-center">
                <h6> salle <span> ${data[i].discountPercentage}<i class="fa-solid fa-percent"></i></span></h6>
            </div>

            <div class="dsImges mt-2 overflow-hidden ">
                <img src="${data[i].thumbnail}" class="card-img-top mx-auto" alt="...">
            </div>
            <div class="card-body">
              <p class="card-text">${data[i].description}</p>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-between">
                    <h6  class="title-products">${data[i].title}</h6>
                    <p> price : <span class="price-amount"> ${data[i].price}<i class="fa-solid fa-sack-dollar fa-4 text-secondary"></i> </span> </p>
                </div>

                <div class="d-flex justify-content-between">
                    <h6 > ${data[i].brand}</h6>
                    <div class="position-static me-4 end-0">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star-half-stroke text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                        <i class="fa-regular fa-star text-warning"></i>
                    </div>
                </div>
            </div>
            <i  onclick="testX(this)" class="fa-solid fa-cart-plus " id="cart-plus"></i>

          </div>
        </div>  `
        // console.log(i);
        document.getElementById("ProductHome").innerHTML=cartona ;

    }
}

// ========================================================================

function ExitPage()
{
    location.replace("../index.html");
} 

// ==========================loding screan ================================================

    $(document).ready(function ()
    {
        $('#loadingScrean .spinner').fadeOut(1500, function () {
        $('#loadingScrean').fadeOut(2000 ,function () {
            $('body').css('overflow-y','auto')
            $('#loadingScrean').remove()
        })
        })
    })
// ======================================================================




//==============cart func=================
let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")
//open cart 
cartIcon.onclick=()=>{
    cart.classList.add("active");
};
//close cart
closeCart.onclick=()=>{
    cart.classList.remove("active");
};
//==================cart working========
if(document.readyState=="loading"){
    document.addEventListener('DOMContentLoaded', ready1)
}else{
  ready1();
}
//////

function ready1(){
    //remove item 
    var RemoveCartButtons = document.getElementsByClassName("fa-trash");
    // console.log(RemoveCartButtons);
    for(var i =0; i < RemoveCartButtons.length; i++){
        var button = RemoveCartButtons[i];
        button.addEventListener("click",removeCarItem);
    }
    //quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i = 0 ; i < quantityInputs.length;i++ ){
        var input = quantityInputs[i]
        input.addEventListener("change",quantityChanged)
    }
    //Add To Cart
    var addCart = document.getElementsByClassName("fa-cart-plus");
    // console.log(addCart);
    for(var i = 0 ; i < addCart.length;i++ ){
        var button = addCart[i];
        // button.addEventListener("click", testX)

    }  
    //btn-buy work
    document.getElementsByClassName("btn-buy")[0].addEventListener("click",buyButtonClicked);
}
//btn-buy
function buyButtonClicked(){
    alert("Your Order is placed")
    var cartContent = document.getElementsByClassName("cartcontent")[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
    updatetotal();
}


function removeCarItem(event){
    var buttonClicked= event.target;
    buttonClicked.parentElement.remove();
    updatetotal();

}
//quantity changed
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value)||input.value <= 0){
        input.value = 1
    }
    updatetotal();
}
//Add To Cart
// var title = document.getElementsByClassName("title-products")
// console.log(title);
// var button2 = event.target
// var shopProducts =parentElement;
// var title2 = shopProducts.parentElement.getElementsByClassName("title-products")[0].innerText;
// console.log(title2);
// var titleramy = document.getElementsByClassName("title-products");
// console.log(titleramy);
// function addCartClicked(event) {
    
//     var button = event.target
//     var shopProducts = button.parentElement;
//     var titleramy = shopProducts.getElementsByClassName("title-products")[0].innerText;
//     console.log(titleramy);
    
// }

// addCartClicked();
 
function testX(event)
{
    var button = event
    var shopProducts = button.parentElement;
    // console.log(shopProducts);
     var titleramy = shopProducts.getElementsByClassName("title-products")[0].innerText;
     
     var priceAmount = shopProducts.getElementsByClassName("price-amount")[0].innerText;
     var imgP = shopProducts.getElementsByClassName("card-img-top mx-auto")[0].src;
     console.log(imgP);

    addProductToCart(titleramy,priceAmount,imgP);
    updatetotal();
    
}
//////////
function addProductToCart(titleramy,priceAmount,imgP){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cartcontent")[0]
    var cartItemNames = document.getElementsByClassName("card-product-title")
    for(var i =0; i < cartItemNames.length; i++){
        console.log(cartItemNames[i].innerText);
            console.log(titleramy);
        if(cartItemNames[i].innerText==titleramy)
        {
            console.log(cartItemNames[i].innerText);
            console.log(titleramy);
        alert("You have alredy add this item to cart")
        
        return;
        }
        // return;
    }
 ///
 var CartBoxContent = `
    <img src="${imgP}" alt="" class="cart-img">
    <div class="detail-box">
    <div class="card-product-title">${titleramy}</div>
    <div class="cart-price">$${priceAmount}</div>
    <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- remove cart -->
    <i class="fa-solid fa-trash" id="trash"></i>`;

    cartShopBox.innerHTML = CartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("fa-trash")[0].addEventListener("click",removeCarItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged);

}
/////




////////// update total
function updatetotal(){
    var cartContent= document.getElementsByClassName("cartcontent")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total=0;
    for(var i =0; i < cartBoxes.length; i++){
        var cartBox= cartBoxes[i]
        var priceElement= cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement= cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity=quantityElement.value;
        total = total+(price*quantity);
    }
        //if price contain some cents value
        total= Math.round(total*100)/100;

        document.getElementsByClassName("total-price")[0].innerText="$"+total;

    
}   
