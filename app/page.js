"use client";

import { useMemo, useState } from "react";

const parts = {
  CPU: [
    { name: "AMD Ryzen 5 7600", price: 699, spec: "6 Cores / 12 Threads" },
    { name: "AMD Ryzen 7 7800X3D", price: 1299, spec: "8 Cores / 16 Threads" },
    { name: "Intel Core i5-14600K", price: 999, spec: "14 Cores / 20 Threads" },
    { name: "Intel Core i7-14700K", price: 1399, spec: "20 Cores / 28 Threads" },
  ],

  "CPU Cooler": [
    { name: "DeepCool AK400", price: 149, spec: "120mm Air Cooler" },
    { name: "Thermalright Peerless Assassin 120", price: 189, spec: "Dual Tower" },
    { name: "DeepCool LS520", price: 299, spec: "240mm AIO" },
  ],

  Motherboard: [
    { name: "MSI B650 Gaming Plus", price: 699, spec: "AM5 / DDR5" },
    { name: "ASUS TUF B650-Plus", price: 749, spec: "AM5 / DDR5" },
    { name: "Gigabyte B650 Eagle", price: 629, spec: "AM5 / DDR5" },
  ],

  RAM: [
    { name: "Kingston Fury 32GB DDR5 6000", price: 399, spec: "2x16GB / 6000MHz" },
    { name: "Corsair Vengeance 32GB DDR5", price: 429, spec: "2x16GB / 6000MHz" },
    { name: "G.Skill Trident Z5 32GB", price: 499, spec: "2x16GB / 6000MHz" },
  ],

  GPU: [
    { name: "RTX 5060 8GB", price: 1399, spec: "NVIDIA / 8GB" },
    { name: "RTX 5070 12GB", price: 2399, spec: "NVIDIA / 12GB" },
    { name: "RX 9070 16GB", price: 2299, spec: "AMD / 16GB" },
    { name: "RTX 5070 Ti 16GB", price: 2999, spec: "NVIDIA / 16GB" },
  ],

  Storage: [
    { name: "Kingston NV3 1TB", price: 249, spec: "PCIe 4.0 NVMe" },
    { name: "Samsung 990 EVO 1TB", price: 329, spec: "PCIe 4.0 NVMe" },
    { name: "WD Black SN850X 2TB", price: 549, spec: "PCIe 4.0 NVMe" },
  ],

  PSU: [
    { name: "Corsair RM750e", price: 399, spec: "750W / 80+ Gold" },
    { name: "MSI MAG A850GL", price: 449, spec: "850W / 80+ Gold" },
    { name: "Corsair RM1000e", price: 599, spec: "1000W / 80+ Gold" },
  ],

  Case: [
    { name: "NZXT H5 Flow", price: 299, spec: "ATX / Airflow" },
    { name: "Lian Li Lancool 216", price: 449, spec: "ATX / Airflow" },
    { name: "Corsair 4000D Airflow", price: 399, spec: "ATX / Airflow" },
  ],
};

const categories = [
  ["CPU", "المعالج"],
  ["CPU Cooler", "مبرد المعالج"],
  ["Motherboard", "اللوحة الأم"],
  ["RAM", "الذاكرة"],
  ["GPU", "كرت الشاشة"],
  ["Storage", "التخزين"],
  ["PSU", "مزود الطاقة"],
  ["Case", "الكيس"],
];

export default function Home() {
  const [selected, setSelected] = useState({});
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  const total = useMemo(() => {
    return Object.values(selected).reduce(
      (sum, item) => sum + item.price,
      0
    );
  }, [selected]);

  const products = active
    ? parts[active].filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  function chooseProduct(product) {
    setSelected({
      ...selected,
      [active]: product,
    });

    setActive(null);
    setSearch("");
  }

  return (
    <main className="app">
      <header className="header">
        <div className="logo">
          PC<span>Scout</span>
        </div>

        <nav>
          <a className="active">PC Builder</a>
          <a>الأسعار</a>
          <a>التجميعات</a>
          <a>المقارنة</a>
        </nav>

        <button className="account">حسابي</button>
      </header>

      <div className="layout">
        <section className="content">
          <div className="pageTitle">
            <div>
              <h1>PC Builder</h1>
              <p>ابنِ جهازك قطعة بقطعة</p>
            </div>

            <button
              className="reset"
              onClick={() => setSelected({})}
            >
              مسح التجميعة
            </button>
          </div>

          <div className="aiBox">
            <div className="aiIcon">🤖</div>

            <div>
              <strong>PCScout AI</strong>
              <p>
                اكتب ميزانيتك واحتياجك، وسنساعدك في بناء التجميعة.
              </p>
            </div>

            <button>بناء بالذكاء الاصطناعي</button>
          </div>

          <div className="partsList">
            {categories.map(([key, name]) => {
              const product = selected[key];

              return (
                <div className="partRow" key={key}>
                  <div className="partCategory">
                    <div className="partNumber">
                      {categories.findIndex((x) => x[0] === key) + 1}
                    </div>

                    <div>
                      <strong>{name}</strong>
                      <small>{key}</small>
                    </div>
                  </div>

                  {product ? (
                    <div className="selectedProduct">
                      <div>
                        <strong>{product.name}</strong>
                        <small>{product.spec}</small>
                      </div>

                      <div className="productPrice">
                        {product.price.toLocaleString()} ر.س
                      </div>

                      <button
                        onClick={() => {
                          setActive(key);
                          setSearch("");
                        }}
                      >
                        تغيير
                      </button>
                    </div>
                  ) : (
                    <button
                      className="choose"
                      onClick={() => {
                        setActive(key);
                        setSearch("");
                      }}
                    >
                      <span>＋</span>
                      اختيار {name}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <aside className="sidebar">
          <div className="summary">
            <div className="summaryHeader">
              <strong>تجميعتي</strong>
              <span>{Object.keys(selected).length}/8</span>
            </div>

            <div className="progress">
              <div
                style={{
                  width: `${(Object.keys(selected).length / 8) * 100}%`,
                }}
              />
            </div>

            <div className="summaryTotal">
              <small>الإجمالي التقريبي</small>
              <strong>{total.toLocaleString()} ر.س</strong>
            </div>

            <div className="check">
              ✓ لا توجد مشاكل توافق حتى الآن
            </div>

            <button className="buildButton">
              عرض التجميعة
            </button>
          </div>

          <div className="stores">
            <strong>المتاجر</strong>

            <div>Amazon.sa <span>—</span></div>
            <div>Noon <span>—</span></div>
            <div>Trendyol <span>—</span></div>

            <small>
              سيتم جلب الأسعار الحقيقية لاحقًا
            </small>
          </div>
        </aside>
      </div>

      {active && (
        <div className="overlay" onClick={() => setActive(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modalHeader">
              <div>
                <small>اختيار القطعة</small>
                <h2>
                  {categories.find((x) => x[0] === active)?.[1]}
                </h2>
              </div>

              <button onClick={() => setActive(null)}>×</button>
            </div>

            <input
              className="search"
              placeholder="ابحث عن قطعة..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />

            <div className="products">
              {products.map((product) => (
                <div className="product" key={product.name}>
                  <div className="productInfo">
                    <strong>{product.name}</strong>
                    <small>{product.spec}</small>
                  </div>

                  <strong>
                    {product.price.toLocaleString()} ر.س
                  </strong>

                  <button
                    onClick={() => chooseProduct(product)}
                  >
                    إضافة
                  </button>
                </div>
              ))}

              {products.length === 0 && (
                <div className="empty">
                  لا توجد نتائج
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f4f5f7;
          font-family: Arial, sans-serif;
        }

        button {
          font-family: inherit;
        }

        .app {
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
          padding: 0 5%;
          gap: 70px;
        }

        .logo {
          font-size: 25px;
          font-weight: 900;
          direction: ltr;
        }

        .logo span {
          color: #16a34a;
        }

        nav {
          display: flex;
          gap: 30px;
          flex: 1;
          height: 100%;
          align-items: center;
        }

        nav a {
          color: #747b84;
          font-size: 14px;
          cursor: pointer;
        }

        nav .active {
          color: #111;
          font-weight: 700;
        }

        .account,
        .reset {
          background: white;
          border: 1px solid #dfe2e6;
          padding: 9px 16px;
          border-radius: 6px;
          cursor: pointer;
        }

        .layout {
          max-width: 1250px;
          margin: auto;
          padding: 45px 20px;
          display: grid;
          grid-template-columns: 1fr 330px;
          gap: 25px;
          direction: ltr;
        }

        .content,
        .sidebar {
          direction: rtl;
        }

        .pageTitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        h1 {
          margin: 0;
          font-size: 34px;
        }

        .pageTitle p {
          margin: 8px 0;
          color: #858c95;
        }

        .aiBox {
          background: #11151b;
          color: white;
          padding: 22px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .aiIcon {
          font-size: 28px;
        }

        .aiBox p {
          color: #aeb5bf;
          margin: 7px 0 0;
          font-size: 13px;
        }

        .aiBox button {
          margin-right: auto;
          background: #22c55e;
          color: #061009;
          border: 0;
          padding: 11px 16px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
        }

        .partsList {
          background: white;
          border: 1px solid #e0e3e7;
          border-radius: 9px;
          overflow: hidden;
        }

        .partRow {
          min-height: 105px;
          padding: 18px 22px;
          border-bottom: 1px solid #eceef0;
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .partRow:last-child {
          border-bottom: 0;
        }

        .partCategory {
          width: 190px;
          display: flex;
          align-items: center;
          gap: 13px;
          flex-shrink: 0;
        }

        .partNumber {
          width: 38px;
          height: 38px;
          background: #f0f2f4;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          font-weight: 700;
        }

        .partCategory strong,
        .partCategory small,
        .selectedProduct strong,
        .selectedProduct small {
          display: block;
        }

        .partCategory small,
        .selectedProduct small {
          color: #9299a2;
          margin-top: 5px;
          font-size: 12px;
        }

        .choose {
          flex: 1;
          text-align: right;
          background: #fafbfc;
          border: 1px dashed #cfd4d9;
          border-radius: 7px;
          padding: 16px;
          color: #666d76;
          cursor: pointer;
        }

        .choose:hover {
          border-color: #16a34a;
          color: #15803d;
        }

        .choose span {
          font-size: 20px;
          margin-left: 8px;
        }

        .selectedProduct {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .selectedProduct > div:first-child {
          flex: 1;
        }

        .productPrice {
          font-weight: 800;
        }

        .selectedProduct button {
          background: white;
          border: 1px solid #d8dce0;
          border-radius: 5px;
          padding: 8px 14px;
          cursor: pointer;
        }

        .summary {
          background: white;
          border: 1px solid #e0e3e7;
          border-radius: 9px;
          padding: 23px;
          position: sticky;
          top: 20px;
        }

        .summaryHeader {
          display: flex;
          justify-content: space-between;
        }

        .summaryHeader span {
          color: #7b828b;
        }

        .progress {
          height: 6px;
          background: #edf0f2;
          margin: 15px 0 30px;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress div {
          height: 100%;
          background: #16a34a;
          transition: .3s;
        }

        .summaryTotal small {
          color: #8d949d;
          display: block;
        }

        .summaryTotal strong {
          display: block;
          font-size: 30px;
          margin-top: 5px;
        }

        .check {
          background: #edf9f0;
          color: #15803d;
          padding: 12px;
          border-radius: 6px;
          margin-top: 20px;
          font-size: 12px;
        }

        .buildButton {
          width: 100%;
          margin-top: 15px;
          background: #15191e;
          color: white;
          border: 0;
          border-radius: 6px;
          padding: 13px;
          cursor: pointer;
          font-weight: 700;
        }

        .stores {
          background: white;
          border: 1px solid #e0e3e7;
          border-radius: 9px;
          margin-top: 15px;
          padding: 20px;
        }

        .stores > strong {
          display: block;
          margin-bottom: 15px;
        }

        .stores div {
          padding: 12px 0;
          border-top: 1px solid #eee;
          font-size: 13px;
        }

        .stores div span {
          float: left;
          color: #aaa;
        }

        .stores small {
          color: #999;
          display: block;
          margin-top: 10px;
          line-height: 1.7;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.55);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 10;
        }

        .modal {
          width: 700px;
          max-width: 100%;
          max-height: 85vh;
          overflow: auto;
          background: white;
          border-radius: 10px;
          padding: 25px;
        }

        .modalHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modalHeader small {
          color: #8b929a;
        }

        .modalHeader h2 {
          margin: 7px 0 20px;
        }

        .modalHeader button {
          border: 0;
          background: #f0f1f2;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          font-size: 22px;
          cursor: pointer;
        }

        .search {
          width: 100%;
          padding: 14px;
          border: 1px solid #dfe3e7;
          border-radius: 7px;
          outline: none;
          font-size: 15px;
          direction: rtl;
        }

        .search:focus {
          border-color: #16a34a;
        }

        .products {
          margin-top: 15px;
        }

        .product {
          border: 1px solid #e4e7ea;
          border-radius: 7px;
          padding: 17px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .productInfo {
          flex: 1;
        }

        .productInfo strong,
        .productInfo small {
          display: block;
        }

        .productInfo small {
          color: #9299a2;
          margin-top: 5px;
        }

        .product button {
          background: #16a34a;
          color: white;
          border: 0;
          padding: 9px 18px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 700;
        }

        .empty {
          padding: 40px;
          text-align: center;
          color: #999;
        }

        @media (max-width: 900px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            order: -1;
          }

          .summary {
            position: static;
          }
        }

        @media (max-width: 650px) {
          nav {
            display: none;
          }

          .header {
            justify-content: space-between;
          }

          .aiBox {
            flex-wrap: wrap;
          }

          .aiBox button {
            margin-right: 0;
            width: 100%;
          }

          .partRow {
            display: block;
          }

          .partCategory {
            width: 100%;
            margin-bottom: 12px;
          }

          .selectedProduct {
            gap: 10px;
          }
        }
      `}</style>
    </main>
  );
}
