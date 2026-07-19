// ======================================
// Pocharuzu Register
// Version 0.2.1
// 商品カード生成
// ======================================

const productList = document.getElementById("productList");

function createProductCard(product){

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <div class="product-info">

            <h3>${product.name}</h3>

            <p class="price">¥${product.price}</p>

            <p class="stock">
                在庫：<span>${product.stock}</span>
            </p>

        </div>

        <div class="product-counter">

            <button disabled>－</button>

            <span>0</span>

            <button disabled>＋</button>

        </div>
    `;

    productList.appendChild(card);

}

products.forEach(product => {

    createProductCard(product);

});