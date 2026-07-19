/* ==========================================
   Pocharuzu Register
   Version 0.1.1 Part1
========================================== */

/* ---------- カラーパレット ---------- */

:root{

    --cream:#FFF8E8;
    --green:#4F6B53;
    --green-light:#7DA07D;
    --orange:#E98B3A;
    --brown:#6C4A35;
    --white:#ffffff;
    --shadow:rgba(0,0,0,.12);

}

/* ---------- リセット ---------- */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{

    font-size:16px;

}

body{

    background:var(--cream);

    font-family:
    "Yu Gothic",
    "Hiragino Sans",
    sans-serif;

    color:var(--brown);

    min-height:100vh;

}

/* ---------- ヘッダー ---------- */

.header{

    background:var(--green);

    color:white;

    padding:28px 20px;

    text-align:center;

    box-shadow:0 5px 15px var(--shadow);

    position:sticky;

    top:0;

    z-index:999;

}

.logo-area h1{

    font-size:2rem;

    margin-bottom:6px;

}

.logo-area p{

    opacity:.8;

    font-size:.95rem;

}

/* ---------- ダッシュボード ---------- */

.dashboard{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:18px;

    padding:20px;

}

.card{

    background:white;

    border-radius:20px;

    padding:20px;

    box-shadow:0 10px 20px var(--shadow);

    text-align:center;

}

.card h2{

    font-size:1rem;

    color:var(--green);

    margin-bottom:15px;

}

.sales-card p{

    font-size:2rem;

    font-weight:bold;

    color:var(--orange);

}

.count-card p{

    font-size:2rem;

    font-weight:bold;

    color:var(--green);

}

/* ---------- 商品一覧 ---------- */

.products{

    padding:20px;

}

.products h2{

    margin-bottom:20px;

    color:var(--brown);

    font-size:1.5rem;

}

#productList{

    display:grid;

    gap:20px;

}

/* ---------- フッター ---------- */

footer{

    padding:30px;

    text-align:center;

}

#resetButton{

    background:var(--orange);

    color:white;

    border:none;

    border-radius:50px;

    padding:15px 28px;

    font-size:1rem;

    cursor:pointer;

    transition:.3s;

}

#resetButton:hover{

    transform:translateY(-2px);

    opacity:.9;

}

.copyright{

    margin-top:18px;

    opacity:.6;

    font-size:.9rem;

}

/* ---------- スマホ ---------- */

@media(max-width:768px){

    .dashboard{

        grid-template-columns:1fr;

    }

    .logo-area h1{

        font-size:1.7rem;

    }

    .sales-card p,
    .count-card p{

        font-size:1.8rem;

    }

}