"use client";

import { useMemo, useState } from "react";

const categories = [
  { id: "CPU", name: "المعالج", icon: "CPU" },
  { id: "GPU", name: "كرت الشاشة", icon: "GPU" },
  { id: "Motherboard", name: "اللوحة الأم", icon: "MB" },
  { id: "RAM", name: "الذاكرة", icon: "RAM" },
  { id: "Storage", name: "التخزين", icon: "SSD" },
  { id: "PSU", name: "مزود الطاقة", icon: "PSU" },
  { id: "Case", name: "الكيس", icon: "CASE" },
  { id: "Cooler", name: "المبرد", icon: "COOL" },
];

const products = {
  CPU: [
    {
      name: "AMD Ryzen 7 7800X3D",
      price: 1299,
      socket: "AM5",
    },
    {
      name: "AMD Ryzen 5 7600X",
      price: 799,
      socket: "AM5",
    },
    {
      name: "Intel Core i5-14600K",
      price: 999,
      socket: "LGA1700",
    },
  ],

  GPU: [
    {
      name: "NVIDIA GeForce RTX 5070",
      price: 2399,
      power: 250,
    },
    {
      name: "AMD Radeon RX 7800 XT",
      price: 1899,
      power: 263,
    },
    {
      name: "NVIDIA GeForce RTX 4060 Ti",
      price: 1599,
      power: 160,
    },
  ],

  Motherboard: [
    {
      name: "MSI B650 Gaming Plus",
      price: 699,
      socket: "AM5",
      ram: "DDR5",
    },
    {
      name: "ASUS TUF B650-PLUS",
      price: 799,
      socket: "AM5",
      ram: "DDR5",
    },
    {
      name: "MSI B760 Gaming Plus",
      price: 649,
      socket: "LGA1700",
      ram: "DDR5",
    },
  ],

  RAM: [
    {
      name: "Kingston Fury Beast 32GB DDR5 6000",
      price: 399,
      ram: "DDR5",
    },
    {
      name: "Corsair Vengeance 32GB DDR5 6000",
      price: 429,
      ram: "DDR5",
    },
  ],

  Storage: [
    {
      name: "Samsung 990 EVO 1TB",
      price: 329,
    },
    {
      name: "WD Black SN850X 1TB",
      price: 349,
    },
  ],

  PSU: [
    {
      name: "Corsair RM750e 750W",
      price: 399,
      wattage: 750,
    },
    {
      name: "MSI MAG A850GL 850W",
      price: 449,
      wattage: 850,
    },
  ],

  Case: [
    {
      name: "NZXT H5 Flow",
      price: 349,
    },
    {
      name: "Lian Li Lancool 216",
      price: 499,
    },
  ],

  Cooler: [
    {
      name: "Thermalright Peerless Assassin 120",
      price: 199,
    },
    {
      name: "DeepCool AK620",
      price: 249,
    },
  ],
};

export default function Builder() {
  const [selected, setSelected] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [search, setSearch] = useState("");

  const total = useMemo(() => {
    return Object.values(selected).reduce(
      (sum, item) => sum + item.price,
      0
    );
  }, [selected]);

  const completed = Object.keys(selected).length;

  const filteredProducts = activeCategory
    ? products[activeCategory].filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  function selectProduct(category, product) {
    setSelected((current) => ({
      ...current,
      [category]: product,
    }));

    setActiveCategory(null);
    setSearch("");
  }

  function removeProduct(category) {
    setSelected((current) => {
      const next = { ...current };
      delete next[category];
      return next;
    });
  }

  function compatibility(category, product) {
    if (category === "Motherboard" && selected.CPU) {
      if (product.socket !== selected.CPU.socket) {
        return "غير متوافق مع المعالج";
      }
    }

    if (category === "RAM" && selected.Motherboard) {
      if (product.ram !== selected.Motherboard.ram) {
        return "نوع RAM غير متوافق";
      }
    }

    if (category === "PSU" && selected.GPU) {
      if (product.wattage < selected.GPU.power * 1.4) {
        return "قدرة PSU منخفضة";
      }
    }

    return null;
  }

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        color: "#111827",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "35px 20px",
        }}
      >
        <header style={{ marginBottom: "30px" }}>
          <h1
            style={{
              fontSize: "36px",
              margin: 0,
              fontWeight: 800,
            }}
          >
            PC Builder
          </h1>

          <p style={{ color: "#6b7280" }}>
            ابنِ جهازك قطعة بقطعة وتحقق من التوافق
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <section>
            {categories.map((category) => {
              const selectedProduct = selected[category.id];
              const warning = selectedProduct
                ? compatibility(category.id, selectedProduct)
                : null;

              return (
                <div
                  key={category.id}
                  style={{
                    background: "#fff",
                    borderRadius: "14px",
                    padding: "20px",
                    marginBottom: "12px",
                    border: warning
                      ? "1px solid #ef4444"
                      : "1px solid #e5e7eb",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "10px",
                          background: "#f3f4f6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          fontWeight: 800,
                        }}
                      >
                        {category.icon}
                      </div>

                      <div>
                        <strong
                          style={{
                            display: "block",
                            fontSize: "17px",
                          }}
                        >
                          {category.name}
                        </strong>

                        <span
                          style={{
                            color: selectedProduct
                              ? "#111827"
                              : "#9ca3af",
                            fontSize: "14px",
                          }}
                        >
                          {selectedProduct
                            ? selectedProduct.name
                            : "لم يتم اختيار قطعة"}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      {selectedProduct && (
                        <strong>
                          {selectedProduct.price.toLocaleString(
                            "ar-SA"
                          )}{" "}
                          ريال
                        </strong>
                      )}

                      {selectedProduct ? (
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
                      ) : null}

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
                        {selectedProduct ? "تغيير" : "اختيار"}
                      </button>
                    </div>
                  </div>

                  {warning && (
                    <div
                      style={{
                        marginTop: "14px",
                        padding: "10px",
                        background: "#fef2f2",
                        color: "#b91c1c",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    >
                      ⚠️ {warning}
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          <aside
            style={{
              background: "#111827",
              color: "#fff",
              borderRadius: "16px",
              padding: "24px",
              position: "sticky",
              top: "20px",
            }}
          >
            <div
              style={{
                color: "#9ca3af",
                fontSize: "14px",
              }}
            >
              PCScout Builder
            </div>

            <h2
              style={{
                fontSize: "18px",
                marginTop: "8px",
              }}
            >
              ملخص التجميعة
            </h2>

            <div
              style={{
                margin: "25px 0",
                fontSize: "14px",
              }}
            >
              {completed} / {categories.length} قطع
            </div>

            <div
              style={{
                height: "8px",
                background: "#374151",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(completed / categories.length) * 100}%`,
                  height: "100%",
                  background: "#22c55e",
                }}
              />
            </div>

            <div
              style={{
                marginTop: "30px",
                paddingTop: "20px",
                borderTop: "1px solid #374151",
              }}
            >
              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                الإجمالي
              </div>

              <div
                style={{
                  fontSize: "30px",
                  fontWeight: 800,
                  marginTop: "5px",
                }}
              >
                {total.toLocaleString("ar-SA")} ريال
              </div>
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
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 100,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "650px",
              maxHeight: "80vh",
              overflow: "auto",
              background: "#fff",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <h2 style={{ marginTop: 0 }}>
              اختر {categories.find(
                (c) => c.id === activeCategory
              )?.name}
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
                marginBottom: "15px",
                fontSize: "16px",
              }}
            />

            {filteredProducts.map((product) => {
              const warning = compatibility(
                activeCategory,
                product
              );

              return (
                <button
                  key={product.name}
                  onClick={() =>
                    !warning &&
                    selectProduct(activeCategory, product)
                  }
                  style={{
                    width: "100%",
                    textAlign: "right",
                    border: "1px solid #e5e7eb",
                    background: warning ? "#fef2f2" : "#fff",
                    padding: "16px",
                    borderRadius: "12px",
                    marginBottom: "10px",
                    cursor: warning ? "not-allowed" : "pointer",
                  }}
                >
                  <strong style={{ display: "block" }}>
                    {product.name}
                  </strong>

                  <span
                    style={{
                      display: "block",
                      marginTop: "5px",
                      color: warning ? "#b91c1c" : "#6b7280",
                    }}
                  >
                    {warning ||
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
