//GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

//DIVS
var floresDIV = document.getElementById('floresDIV');

//INFORMATION
var FLORES = [
    {name: 'Caléndula', price: 1},
    {name: 'Marimonia', price: 1},
    {name: 'Gerbera', price: 1},
    {name: 'Lilium', price: 1},
    {name: 'Hibiscus rosa', price: 1},
    {name: 'Cala', price: 1},
    {name: 'Azalea', price: 1},
    {name: 'Zinnia', price: 1},
    {name: 'Zinnia elegans', price: 1},
    {name: 'Nacar', price: 1},
    {name: 'Clavelina', price: 1},
    {name: 'Impatiens', price: 1},
];

//HTML
function HTMLfloresProduct(con){
    let URL = `/img/flores/flor${con}.jpeg`;
    let btn = `btnFlores${con}`;
    return`
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${FLORES[con-1].name}</p>
                    <p class="card-text">Price: ${FLORES[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${FLORES[con-1].name}','${FLORES[con-1].price}','${URL}', '${con}', '${btn}')"
                            class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${FLORES[con-1].name}','${FLORES[con-1].price}','${URL}', '${con}', '${btn}')"
                            class="btn btn-sm btn-outline-secondary">Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}

//ANIMATION
function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title: 'Added to shopping cart'
    });
}

//CART FUNCTIONS
function cart(name, price, url, con, btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }else{
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}

function cart2(name, price, url, con, btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }else{
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}

(()=>{
    for(let index = 1; index <= 12; index ++){
        floresDIV.innerHTML+=`${HTMLfloresProduct(index)}`;
    }
    if(localStorage.getItem("cart")==null){

    }else{
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();