// ================================
// ぽちゃるずレジ Version 1.0
// app.js Part1
// ================================

// ---------- LocalStorage ----------

const STORAGE_KEY = "pocharuzu-register-data";

let salesData = JSON.parse(localStorage.getItem(STORAGE_KEY));

// 初回起動時
if (!salesData) {

    salesData = [];

}

// 新しく追加された商品を自動登録
products.forEach(product => {

    const exists = salesData.find(item => item.id === product.id);

    if (!exists) {

        salesData.push({

            id: product.id,
            sold: 0

        });

    }

});

// 保存し直す
localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(salesData)
);

// ---------- 要素取得 ----------

const productList = document.getElementById("productList");

const totalSales = document.getElementById("totalSales");
const totalCount = document.getElementById("totalCount");
const cashSales = document.getElementById("cashSales");
const paypaySales = document.getElementById("paypaySales");

const resetButton = document.getElementById("resetButton");

// ---------- データ取得 ----------

function getSold(productId) {

    const item = salesData.find(data => data.id === productId);

    return item ? item.sold : 0;

}

function getStock(product) {

    return product.stock - getSold(product.id);

}

// ---------- 商品一覧描画 ----------

function renderProducts() {

    productList.innerHTML = "";

    products.forEach(product => {

        const sold = getSold(product.id);

        const stock = getStock(product);

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

        <div class="product-info">

            <h3>${product.name}</h3>

            <div class="price">¥${product.price}</div>

            <div class="product-stats">

                <p class="${stock <= 5 ? "low-stock" : ""}">
                    在庫：${stock}
                </p>

                <p>
                    販売数：${sold}
                </p>

                <p class="product-sales">
                    売上：¥${sold * product.price}
                </p>

            </div>

        </div>

        <div class="product-counter">

            <button
                class="minus"
                onclick="minusProduct(${product.id})"
            >
                −
            </button>

            <span>${sold}</span>

            <button
                class="plus"
                onclick="plusProduct(${product.id})"
                ${stock <= 0 ? "disabled" : ""}
            >
                ＋
            </button>

        </div>

        `;

        productList.appendChild(card);

    });

}
// ================================
// app.js Part2
// 売上・在庫・ダッシュボード更新
// ================================

// ---------- LocalStorage保存 ----------

function saveData() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(salesData)
    );

}

// ---------- ダッシュボード更新 ----------

function updateDashboard() {

    let totalSale = 0;
    let totalItemCount = 0;

    products.forEach(product => {

        const sold = getSold(product.id);

        totalItemCount += sold;
        totalSale += sold * product.price;

    });

    totalSales.textContent =
        `¥${totalSale.toLocaleString()}`;

    totalCount.textContent =
        `${totalItemCount}個`;

    // Version1.0では全て現金扱い
    cashSales.textContent =
        `¥${totalSale.toLocaleString()}`;

    paypaySales.textContent =
        "¥0";

}

// ---------- ＋ボタン ----------

function plusProduct(productId) {

    const product =
        products.find(p => p.id === productId);

    const data =
        salesData.find(d => d.id === productId);

    if (!product || !data) return;

    if (data.sold >= product.stock) {

        alert("在庫がありません。");

        return;

    }

    data.sold++;

    saveData();

    renderProducts();

    updateDashboard();

}

// ---------- −ボタン ----------

function minusProduct(productId) {

    const data =
        salesData.find(d => d.id === productId);

    if (!data) return;

    if (data.sold <= 0) {

        return;

    }

    data.sold--;

    saveData();

    renderProducts();

    updateDashboard();

}
// ================================
// app.js Part3
// 初期化・リセット
// ================================

// ---------- リセット ----------

resetButton.addEventListener("click", () => {

    const result = confirm(
        "販売データをすべてリセットしますか？"
    );

    if (!result) return;

    salesData = products.map(product => ({
        id: product.id,
        sold: 0
    }));

    saveData();

    renderProducts();

    updateDashboard();

});

// ---------- 初期化 ----------

function initialize() {

    renderProducts();

    updateDashboard();

}

// ---------- 起動 ----------

initialize();