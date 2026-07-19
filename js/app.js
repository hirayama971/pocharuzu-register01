//======================================
// Pocharuzu Register
// Version 0.2.2
//======================================

const productList = document.getElementById("productList");
const totalSales = document.getElementById("totalSales");
const totalCount = document.getElementById("totalCount");

let sales = 0;
let count = 0;

const cart = {};

//------------------------------
// 商品カード生成
//------------------------------

function renderProducts(){

    productList.innerHTML = "";

    products.forEach(product=>{

        if(cart[product.id] == null){

            cart[product.id] = 0;

        }

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

        <div class="product-info">

            <h3>${product.name}</h3>

            <p class="price">¥${product.price}</p>

<div class="product-stats">

    <p class="stock">
        在庫：
        <span id="stock-${product.id}">
            ${product.stock - cart[product.id]}
        </span>
    </p>

    <p>
        販売：
        <span id="sold-${product.id}">
            ${cart[product.id]}
        </span>
    </p>

    <p class="product-sales">

        売上：

        <span id="sales-${product.id}">
            ¥${(cart[product.id] * product.price).toLocaleString()}
        </span>

    </p>

</div>

        </div>

        <div class="product-counter">

            <button
            onclick="minusProduct(${product.id})">
            −
            </button>

            <span id="count-${product.id}">
                ${cart[product.id]}
            </span>

            <button
            onclick="plusProduct(${product.id})">
            ＋
            </button>

        </div>

        `;

        productList.appendChild(card);

    });

}

//------------------------------
// 合計更新
//------------------------------

function updateTotals(){

    sales = 0;
    count = 0;

    products.forEach(product=>{

        sales += cart[product.id] * product.price;

        count += cart[product.id];

    });

    totalSales.textContent =
        "¥" + sales.toLocaleString();

    totalCount.textContent =
        count + "個";

}

//------------------------------
// プラス
//------------------------------

function plusProduct(id){

    cart[id]++;

    document.getElementById(

        "count-"+id

    ).textContent = cart[id];
    const product = products.find(p => p.id === id);

document.getElementById(
    "stock-"+id
).textContent = product.stock - cart[id];

document.getElementById(
    "sold-"+id
).textContent = cart[id];

document.getElementById(
    "sales-"+id
).textContent =
"¥" + (cart[id] * product.price).toLocaleString();

    updateTotals();

}

//------------------------------
// マイナス
//------------------------------

function minusProduct(id){

    if(cart[id] <= 0){

        return;

    }

    cart[id]--;

    document.getElementById(

        "count-"+id
        const product = products.find(p => p.id === id);

document.getElementById(
    "stock-"+id
).textContent = product.stock - cart[id];

document.getElementById(
    "sold-"+id
).textContent = cart[id];

document.getElementById(
    "sales-"+id
).textContent =
"¥" + (cart[id] * product.price).toLocaleString();

    ).textContent = cart[id];

    updateTotals();

}

//------------------------------
// リセット
//------------------------------

document
.getElementById("resetButton")
.addEventListener("click",()=>{

    products.forEach(product=>{

        cart[product.id]=0;

    });

    renderProducts();

    updateTotals();

});

//------------------------------

renderProducts();

updateTotals();