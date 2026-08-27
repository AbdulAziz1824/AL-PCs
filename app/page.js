"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function searchProducts() {
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);

    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}`
      );

      const data = await response.json();

      setResults(data.results || []);
    } catch (error) {
      console.error(error);
      setResults([]);
    }

    setLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      searchProducts();
    }
  }

  return (
    <main className="site">
      <header className="header">
        <div className="logo">
          PC<span>Scout</span>
        </div>

        <nav>
          <a className="active">البحث</a>
          <a>PC Builder</a>
          <a>التجميعات</a>
          <a>المقارنة</a>
        </nav>

        <button className="account">حسابي</button>
      </header>

      <section className="hero">
        <div className="badge">PCSCOUT AI</div>

        <h1>
          ابحث عن أي قطعة
          <br />
          <span>وقارن أسعارها</span>
        </h1>

        <p>
          اكتب اسم المعالج أو كرت الشاشة أو أي قطعة كمبيوتر،
          وسنبحث لك عن أفضل الأسعار.
        </p>

        <div className="searchBox">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="مثال: RTX 5070"
          />

          <button onClick={searchProducts}>
            {loading ? "جاري البحث..." : "بحث"}
          </button>
        </div>

        <div className="examples">
          <span>جرّب:</span>

          <button onClick={() => setQuery("RTX 5070")}>
            RTX 5070
          </button>

          <button onClick={() => setQuery("7800X3D")}>
            Ryzen 7 7800X3D
          </button>

          <button onClick={() => setQuery("DDR5")}>
            DDR5
          </button>
        </div>
      </section>

      {searched && (
        <section className="resultsSection">
          <div className="resultsHeader">
            <div>
              <h2>نتائج البحث</h2>
              <p>
                {results.length} نتيجة لـ "{query}"
              </p>
            </div>
          </div>

          {loading ? (
            <div className="message">
              جاري البحث عن أفضل النتائج...
            </div>
          ) : results.length === 0 ? (
            <div className="message">
              لم نجد نتائج مطابقة.
            </div>
          ) : (
            <div className="results">
              {results.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {!searched && (
        <section className="popular">
          <h2>ماذا تريد أن تبحث عنه؟</h2>

          <div className="categories">
            <Category icon="▣" name="المعالجات" />
            <Category icon="▰" name="كروت الشاشة" />
            <Category icon="▥" name="الرامات" />
            <Category icon="▤" name="التخزين" />
          </div>
        </section>
      )}

      <footer>
        <strong>
          PC<span>Scout</span>
        </strong>

        <p>
          ابحث. قارن. اختر أفضل صفقة.
        </p>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f5f6f8;
          font-family: Arial, sans-serif;
        }

        button,
        input {
          font-family: inherit;
        }

        .site {
          min-height: 100vh;
          color: #16191d;
          direction: rtl;
        }

        .header {
          height: 70px;
          background: white;
          border-bottom: 1px solid #e2e5e8;
          display: flex;
          align-items: center;
          padding: 0 6%;
          gap: 60px;
        }

        .logo {
          font-size: 25px;
          font-weight: 900;
          direction: ltr;
        }

        .logo span,
        footer span {
          color: #16a34a;
        }

        nav {
          display: flex;
          gap: 30px;
          flex: 1;
        }

        nav a {
          color: #737a83;
          font-size: 14px;
        }

        nav .active {
          color: #111;
          font-weight: 700;
        }

        .account {
          border: 1px solid #dfe2e6;
          background: white;
          border-radius: 6px;
          padding: 9px 17px;
        }

        .hero {
          max-width: 900px;
          margin: auto;
          text-align: center;
          padding: 85px 20px 55px;
        }

        .badge {
          display: inline-block;
          background: #e9f8ee;
          color: #15803d;
          padding: 8px 13px;
          border-radius: 5px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        h1 {
          font-size: 60px;
          line-height: 1.1;
          letter-spacing: -2px;
          margin: 20px 0;
        }

        h1 span {
          color: #16a34a;
        }

        .hero > p {
          color: #737a83;
          font-size: 17px;
          line-height: 1.9;
          max-width: 650px;
          margin: auto;
        }

        .searchBox {
          max-width: 720px;
          height: 64px;
          margin: 35px auto 0;
          background: white;
          border: 1px solid #dce0e4;
          border-radius: 9px;
          padding: 7px;
          display: flex;
          box-shadow: 0 5px 20px rgba(0,0,0,.04);
        }

        .searchBox input {
          flex: 1;
          border: 0;
          outline: 0;
          padding: 0 18px;
          font-size: 16px;
          text-align: right;
        }

        .searchBox button {
          width: 125px;
          border: 0;
          border-radius: 6px;
          background: #15191e;
          color: white;
          font-weight: 700;
          cursor: pointer;
        }

        .searchBox button:hover {
          background: #16a34a;
        }

        .examples {
          margin-top: 15px;
          display: flex;
          justify-content: center;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }

        .examples span {
          color: #999;
          font-size: 13px;
        }

        .examples button {
          background: white;
          border: 1px solid #e0e3e6;
          border-radius: 5px;
          padding: 7px 11px;
          color: #555;
          cursor: pointer;
          font-size: 12px;
        }

        .resultsSection,
        .popular {
          max-width: 1100px;
          margin: auto;
          padding: 20px 20px 80px;
        }

        .resultsHeader {
          margin-bottom: 20px;
        }

        .resultsHeader h2,
        .popular h2 {
          margin-bottom: 5px;
        }

        .resultsHeader p {
          color: #8b929a;
          margin-top: 0;
        }

        .results {
          display: grid;
          gap: 12px;
        }

        .productCard {
          background: white;
          border: 1px solid #e0e3e7;
          border-radius: 9px;
          padding: 22px;
        }

        .productTop {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .productImage {
          width: 75px;
          height: 75px;
          background: #f1f3f5;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
        }

        .productInfo {
          flex: 1;
        }

        .productInfo h3 {
          margin: 0;
          font-size: 18px;
        }

        .productInfo p {
          color: #8a919a;
          font-size: 13px;
        }

        .bestPrice {
          text-align: left;
        }

        .bestPrice small {
          display: block;
          color: #8a919a;
        }

        .bestPrice strong {
          display: block;
          font-size: 24px;
          margin-top: 5px;
        }

        .bestBadge {
          display: inline-block;
          margin-top: 5px;
          color: #15803d;
          font-size: 12px;
        }

        .stores {
          border-top: 1px solid #eceef0;
          margin-top: 20px;
          padding-top: 15px;
          display: grid;
          gap: 8px;
        }

        .store {
          display: flex;
          align-items: center;
          padding: 12px;
          background: #fafafa;
          border-radius: 6px;
        }

        .storeName {
          flex: 1;
          font-weight: 600;
        }

        .storePrice {
          font-weight: 700;
          margin-left: 20px;
        }

        .buy {
          background: white;
          border: 1px solid #d9dde1;
          border-radius: 5px;
          padding: 7px 13px;
          cursor: pointer;
        }

        .buy:hover {
          border-color: #16a34a;
          color: #15803d;
        }

        .message {
          background: white;
          border: 1px solid #e1e4e7;
          border-radius: 8px;
          padding: 45px;
          text-align: center;
          color: #777;
        }

        .categories {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-top: 25px;
        }

        .category {
          background: white;
          border: 1px solid #e1e4e7;
          border-radius: 8px;
          padding: 25px;
        }

        .categoryIcon {
          font-size: 28px;
          margin-bottom: 15px;
        }

        footer {
          border-top: 1px solid #e0e3e6;
          background: white;
          padding: 35px 6%;
          color: #7b828b;
        }

        footer strong {
          color: #15191e;
          font-size: 20px;
        }

        footer p {
          font-size: 13px;
        }

        @media (max-width: 700px) {
          nav {
            display: none;
          }

          h1 {
            font-size: 43px;
          }

          .categories {
            grid-template-columns: 1fr 1fr;
          }

          .productTop {
            align-items: flex-start;
          }

          .bestPrice {
            text-align: right;
          }
        }
      `}</style>
    </main>
  );
}

function ProductCard({ product }) {
  return (
    <div className="productCard">
      <div className="productTop">
        <div className="productImage">🖥️</div>

        <div className="productInfo">
          <h3>{product.name}</h3>
          <p>{product.specs}</p>
        </div>

        <div className="bestPrice">
          <small>أفضل سعر</small>
          <strong>
            {product.cheapest.price.toLocaleString()} ر.س
          </strong>
          <span className="bestBadge">
            🏆 {product.cheapest.name}
          </span>
        </div>
      </div>

      <div className="stores">
        {product.stores.map((store) => (
          <div className="store" key={store.name}>
            <span className="storeName">
              {store.name}
            </span>

            <span className="storePrice">
              {store.price.toLocaleString()} ر.س
            </span>

            <button className="buy">
              عرض المنتج
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Category({ icon, name }) {
  return (
    <div className="category">
      <div className="categoryIcon">{icon}</div>
      <strong>{name}</strong>
    </div>
  );
}
