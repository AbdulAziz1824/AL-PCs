"use client";

import { useState } from "react";

const categories = [
  { name: "المعالج", key: "CPU", icon: "▣" },
  { name: "مبرد المعالج", key: "Cooler", icon: "❄" },
  { name: "اللوحة الأم", key: "Motherboard", icon: "▤" },
  { name: "الذاكرة", key: "RAM", icon: "▥" },
  { name: "كرت الشاشة", key: "GPU", icon: "▰" },
  { name: "التخزين", key: "Storage", icon: "▤" },
  { name: "مزود الطاقة", key: "PSU", icon: "⚡" },
  { name: "الكيس", key: "Case", icon: "▥" },
];

export default function Home() {
  const [parts, setParts] = useState({});
  const [aiOpen, setAiOpen] = useState(false);

  const selectedCount = Object.keys(parts).length;

  return (
    <main className="site">
      <header className="header">
        <div className="headerInner">
          <div className="logo">
            PC<span>Scout</span>
          </div>

          <nav>
            <a className="active">منشئ الكمبيوتر</a>
            <a>الأسعار</a>
            <a>التجميعات</a>
            <a>المقارنة</a>
          </nav>

          <button className="login">تسجيل الدخول</button>
        </div>
      </header>

      <section className="hero">
        <div>
          <div className="badge">PCSCOUT BUILDER</div>

          <h1>
            ابنِ جهازك
            <br />
            <span>بذكاء.</span>
          </h1>

          <p>
            اختر قطع جهازك، وسنساعدك في العثور على أفضل
            الأسعار والتأكد من توافق جميع القطع.
          </p>

          <button
            className="aiButton"
            onClick={() => setAiOpen(!aiOpen)}
          >
            🤖 ابنِ لي تجميعة بالذكاء الاصطناعي
          </button>
        </div>

        <div className="summary">
          <div className="summaryTop">
            <span>تجميعتي</span>
            <strong>{selectedCount}/8</strong>
          </div>

          <div className="progress">
            <div
              style={{
                width: `${(selectedCount / 8) * 100}%`,
              }}
            />
          </div>

          <div className="totalLabel">السعر التقريبي</div>

          <div className="total">0 <small>ر.س</small></div>

          <div className="compatibility">
            ✓ جاهز لاختيار القطع
          </div>
        </div>
      </section>

      {aiOpen && (
        <section className="aiPanel">
          <div>
            <span className="aiIcon">🤖</span>
          </div>

          <div className="aiContent">
            <h2>PCScout AI</h2>

            <p>
              اكتب المواصفات التي تريدها، مثل:
              <br />
              "أبغى تجميعة ألعاب 1440p بميزانية 6000 ريال"
            </p>

            <div className="aiInput">
              <input placeholder="اكتب طلبك هنا..." />
              <button>إنشاء التجميعة</button>
            </div>
          </div>
        </section>
      )}

      <section className="builder">
        <div className="builderHeader">
          <div>
            <h2>مكونات الكمبيوتر</h2>
            <p>اختر القطع التي تريد إضافتها إلى تجميعتك</p>
          </div>

          <button className="clear">مسح الكل</button>
        </div>

        <div className="parts">
          {categories.map((category) => (
            <PartRow
              key={category.key}
              category={category}
              selected={parts[category.key]}
              onSelect={() =>
                setParts({
                  ...parts,
                  [category.key]: true,
                })
              }
            />
          ))}
        </div>
      </section>

      <section className="stores">
        <div className="storesTitle">
          <h2>نقارن لك الأسعار</h2>
          <p>من أشهر المتاجر في المنطقة</p>
        </div>

        <div className="storeGrid">
          <Store name="Amazon.sa" logo="A" />
          <Store name="Noon" logo="N" />
          <Store name="Trendyol" logo="T" />
        </div>
      </section>

      <footer>
        <strong>
          PC<span>Scout</span>
        </strong>
        <p>ابنِ جهازك. قارن الأسعار. ادفع أقل.</p>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .site {
          min-height: 100vh;
          background: #f5f6f8;
          color: #15181d;
          font-family: Arial, sans-serif;
        }

        .header {
          background: white;
          border-bottom: 1px solid #e4e6e9;
        }

        .headerInner {
          max-width: 1200px;
          margin: auto;
          height: 72px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .logo span,
        footer span {
          color: #16a34a;
        }

        nav {
          display: flex;
          gap: 30px;
          height: 100%;
          align-items: center;
        }

        nav a {
          color: #6b7280;
          font-size: 14px;
          cursor: pointer;
        }

        nav .active {
          color: #111827;
          font-weight: 700;
        }

        .login {
          border: 1px solid #dfe2e6;
          background: white;
          padding: 10px 18px;
          border-radius: 7px;
          cursor: pointer;
        }

        .hero {
          max-width: 1200px;
          margin: auto;
          padding: 70px 20px 50px;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 70px;
          align-items: center;
        }

        .badge {
          display: inline-block;
          background: #e8f7ed;
          color: #15803d;
          padding: 7px 12px;
          border-radius: 5px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        h1 {
          font-size: 64px;
          line-height: 1.05;
          margin: 18px 0;
          letter-spacing: -3px;
        }

        h1 span {
          color: #16a34a;
        }

        .hero p {
          color: #6b7280;
          font-size: 17px;
          line-height: 1.9;
          max-width: 600px;
        }

        .aiButton {
          margin-top: 20px;
          background: #15181d;
          color: white;
          border: 0;
          border-radius: 7px;
          padding: 14px 20px;
          font-weight: 700;
          cursor: pointer;
        }

        .summary {
          background: white;
          border: 1px solid #e1e4e8;
          border-radius: 10px;
          padding: 25px;
          box-shadow: 0 8px 30px rgba(0,0,0,.04);
        }

        .summaryTop {
          display: flex;
          justify-content: space-between;
          color: #6b7280;
          font-size: 14px;
        }

        .summaryTop strong {
          color: #15181d;
        }

        .progress {
          height: 6px;
          background: #edf0f2;
          border-radius: 10px;
          margin: 15px 0 35px;
          overflow: hidden;
        }

        .progress div {
          height: 100%;
          background: #16a34a;
          transition: .3s;
        }

        .totalLabel {
          color: #9ca3af;
          font-size: 13px;
        }

        .total {
          font-size: 36px;
          font-weight: 900;
          margin-top: 5px;
        }

        .total small {
          font-size: 15px;
          color: #6b7280;
        }

        .compatibility {
          margin-top: 20px;
          background: #edf9f0;
          color: #15803d;
          padding: 12px;
          text-align: center;
          border-radius: 6px;
          font-size: 13px;
        }

        .aiPanel {
          max-width: 1200px;
          margin: 0 auto 30px;
          background: #11151b;
          color: white;
          border-radius: 10px;
          padding: 30px;
          display: flex;
          gap: 20px;
        }

        .aiIcon {
          font-size: 30px;
        }

        .aiContent {
          flex: 1;
        }

        .aiContent h2 {
          margin-top: 0;
        }

        .aiContent p {
          color: #aeb4bd;
          line-height: 1.8;
        }

        .aiInput {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .aiInput input {
          flex: 1;
          background: #20252c;
          color: white;
          border: 1px solid #343a43;
          border-radius: 6px;
          padding: 14px;
          outline: none;
        }

        .aiInput button {
          background: #22c55e;
          border: 0;
          border-radius: 6px;
          padding: 0 20px;
          font-weight: 700;
          cursor: pointer;
        }

        .builder {
          max-width: 1200px;
          margin: auto;
          padding: 30px 20px 80px;
        }

        .builderHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .builderHeader h2,
        .stores h2 {
          margin-bottom: 5px;
        }

        .builderHeader p,
        .storesTitle p {
          color: #8a919b;
          margin-top: 0;
        }

        .clear {
          background: white;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 9px 15px;
          cursor: pointer;
        }

        .parts {
          background: white;
          border: 1px solid #e1e4e8;
          border-radius: 10px;
          overflow: hidden;
        }

        .part {
          min-height: 92px;
          display: grid;
          grid-template-columns: 55px 1fr 180px;
          align-items: center;
          gap: 20px;
          padding: 15px 25px;
          border-bottom: 1px solid #edf0f2;
        }

        .part:last-child {
          border-bottom: 0;
        }

        .partIcon {
          width: 45px;
          height: 45px;
          border-radius: 7px;
          background: #f1f3f5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          font-size: 20px;
        }

        .partName {
          font-weight: 700;
        }

        .partDesc {
          color: #9ca3af;
          font-size: 13px;
          margin-top: 6px;
        }

        .choose {
          border: 1px solid #d7dbe0;
          background: white;
          border-radius: 6px;
          padding: 11px;
          cursor: pointer;
          font-weight: 600;
        }

        .choose:hover {
          border-color: #16a34a;
          color: #15803d;
        }

        .stores {
          background: white;
          border-top: 1px solid #e3e5e8;
          border-bottom: 1px solid #e3e5e8;
          padding: 60px 20px;
        }

        .storesTitle {
          max-width: 1200px;
          margin: auto;
        }

        .storeGrid {
          max-width: 1200px;
          margin: 25px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .store {
          border: 1px solid #e2e5e8;
          border-radius: 8px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          background: #fafafa;
        }

        .storeLogo {
          width: 42px;
          height: 42px;
          border-radius: 7px;
          background: #15181d;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        footer {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
          color: #6b7280;
        }

        footer strong {
          color: #15181d;
          font-size: 20px;
        }

        footer p {
          font-size: 13px;
        }

        @media (max-width: 800px) {
          nav {
            display: none;
          }

          .hero {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          h1 {
            font-size: 48px;
          }

          .part {
            grid-template-columns: 45px 1fr;
          }

          .choose {
            grid-column: 2;
          }

          .storeGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}

function PartRow({ category, selected, onSelect }) {
  return (
    <div className="part">
      <div className="partIcon">{category.icon}</div>

      <div>
        <div className="partName">{category.name}</div>

        <div className="partDesc">
          {selected
            ? "تمت إضافة القطعة"
            : "لم يتم اختيار قطعة بعد"}
        </div>
      </div>

      <button className="choose" onClick={onSelect}>
        {selected ? "✓ تمت الإضافة" : "اختيار قطعة"}
      </button>
    </div>
  );
}

function Store({ name, logo }) {
  return (
    <div className="store">
      <div className="storeLogo">{logo}</div>
      <strong>{name}</strong>
    </div>
  );
}
