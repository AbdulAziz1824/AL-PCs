"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";

const categories = [
  { id: "CPU", name: "المعالج" },
  { id: "GPU", name: "كرت الشاشة" },
  { id: "Motherboard", name: "اللوحة الأم" },
  { id: "RAM", name: "الذاكرة" },
  { id: "Storage", name: "التخزين" },
  { id: "PSU", name: "مزود الطاقة" },
  { id: "Case", name: "الكيس" },
  { id: "Cooler", name: "المبرد" },
];

export default function Builder() {
  const [selected, setSelected] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [search, setSearch] = useState("");

  const total = useMemo(
    () =>
      Object.values(selected).reduce(
        (sum, product) => sum + product.price,
        0
      ),
    [selected]
  );

  const filteredProducts = activeCategory
    ? products
        .filter((product) => product.category === activeCategory)
        .filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
    : [];

  function getCompatibility(category, product) {
    if (category === "Motherboard" && selected.CPU) {
      if (product.socket !== selected.CPU.socket) {
        return "غير متوافق مع المعالج";
      }
    }

    if (category === "CPU" && selected.Motherboard) {
      if (product.socket !== selected.Motherboard.socket) {
        return "غير متوافق مع اللوحة الأم";
      }
    }

    if (category === "RAM" && selected.Motherboard) {
      if (product.ram !== selected.Motherboard.ram) {
        return "نوع الذاكرة غير متوافق";
      }
    }

    return null;
  }

  function selectProduct(category, product) {
    const error = getCompatibility(category, product);

    if (error) return;

    setSelected((current) => ({
      ...current,
      [category]: product,
    }));

    setActiveCategory(null);
    setSearch("");
  }

  function removeProduct(category) {
    setSelected((current) => {
      const copy = { ...current };
      delete copy[category];
      return copy;
    });
  }

  const completed = Object.keys(selected).length;

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "40px 20px",
        color: "#111827",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h1 style={{ fontSize: "38px", marginBottom: "5px" }}>
          PC Builder
        </h1>

        <p style={{ color: "#6b7280" }}>
          ابنِ تجميعتك وتحقق من توافق القطع
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          <section>
            {categories.map((category) => {
              const product = selected[category.id];

              return (
                <div
                  key={category.id}
                  style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "14px",
                    marginBottom: "12px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: "17px" }}>
                        {category.name}
                      </strong>

                      <div
                        style={{
                          color: "#6b7280",
                          marginTop: "6px",
                        }}
                      >
                        {product
                          ? product.name
                          : "لم يتم اختيار قطعة"}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      {product && (
                        <>
                          <strong>
                            {product.price.toLocaleString("ar-SA")} ريال
                          </strong>

                          <button
                            onClick={() =>
                              removeProduct(category.id)
                            }
                            style={{
                              border: "none",
                              background: "#fee2e2",
                              color: "#b91c1c",
                              padding: "9px 12px",
                              borderRadius: "8px",
                              cursor: "pointer",
                            }}
                          >
                            حذف
                          </button>
                        </>
                      )}

                      <button
                        onClick={() => {
                          setActiveCategory(category.id);
                          setSearch("");
                        }}
                        style={{
                          border: "none",
                          background: "#111827",
                          color: "#fff",
                          padding: "10px 16px",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                      >
                        {product ? "تغيير" : "اختيار"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          <aside
            style={{
              background: "#111827",
              color: "#fff",
              borderRadius: "16px",
              padding: "25px",
              height: "fit-content",
              position: "sticky",
              top: "20px",
            }}
          >
            <div style={{ color: "#9ca3af" }}>
              PCScout Builder
            </div>

            <h2>ملخص التجميعة</h2>

            <div style={{ color: "#d1d5db" }}>
              {completed} / {categories.length} قطع
            </div>

            <div
              style={{
                height: "8px",
                background: "#374151",
                borderRadius: "20px",
                marginTop: "15px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${(completed / categories.length) * 100}%`,
                  background: "#22c55e",
                  borderRadius: "20px",
                }}
              />
            </div>

            <div
              style={{
                borderTop: "1px solid #374151",
                marginTop: "25px",
                paddingTop: "20px",
              }}
            >
              <div style={{ color: "#9ca3af" }}>
                الإجمالي
              </div>

              <strong style={{ fontSize: "30px" }}>
                {total.toLocaleString("ar-SA")} ريال
              </strong>
            </div>
          </aside>
        </div>
      </div>

      {activeCategory && (
        <div
          onClick={() => setActiveCategory(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 10,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "25px",
              width: "100%",
              maxWidth: "650px",
              maxHeight: "80vh",
              overflow: "auto",
            }}
          >
            <h2>
              اختر{" "}
              {
                categories.find(
                  (c) => c.id === activeCategory
                )?.name
              }
            </h2>

            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن قطعة..."
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                fontSize: "16px",
                marginBottom: "15px",
              }}
            />

            {filteredProducts.map((product) => {
              const error = getCompatibility(
                activeCategory,
                product
              );

              return (
                <button
                  key={product.id}
                  disabled={!!error}
                  onClick={() =>
                    selectProduct(activeCategory, product)
                  }
                  style={{
                    width: "100%",
                    textAlign: "right",
                    padding: "16px",
                    marginBottom: "10px",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                    background: error ? "#fef2f2" : "#fff",
                    cursor: error
                      ? "not-allowed"
                      : "pointer",
                  }}
                >
                  <strong style={{ display: "block" }}>
                    {product.name}
                  </strong>

                  <span
                    style={{
                      display: "block",
                      marginTop: "5px",
                      color: error
                        ? "#b91c1c"
                        : "#6b7280",
                    }}
                  >
                    {error ||
                      `${product.price.toLocaleString(
                        "ar-SA"
                      )} ريال`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}
