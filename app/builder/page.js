"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold">
            PC<span className="text-green-400">Scout</span>
          </div>

          <nav className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="#" className="hover:text-white">الرئيسية</a>
            <a href="#" className="hover:text-white">القطع</a>
            <a href="#" className="hover:text-white">التجميعات</a>
            <a href="#" className="hover:text-white">مقارنة الأسعار</a>
          </nav>

          <button className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5">
            تسجيل الدخول
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-24 text-center">
        <div className="mb-6 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-400">
          🤖 مدعوم بالذكاء الاصطناعي
        </div>

        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          ابحث عن قطع الكمبيوتر
          <br />
          <span className="text-green-400">بأذكى طريقة</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
          اكتب ما تبحث عنه بطريقتك، وسنبحث لك عن أفضل الأسعار
          ونقارن بين المتاجر في مكان واحد.
        </p>

        {/* Search */}
        <div className="mt-10 flex w-full max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl md:flex-row">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="مثال: أبغى RTX 5070 بأقل سعر"
            className="h-14 flex-1 bg-transparent px-5 text-right text-base outline-none placeholder:text-gray-600"
          />

          <button className="h-14 rounded-xl bg-green-400 px-8 font-bold text-black transition hover:bg-green-300">
            🔍 ابحث بالذكاء الاصطناعي
          </button>
        </div>

        <div className="mt-5 text-sm text-gray-600">
          مثال: "أبغى تجميعة ألعاب بـ 5000 ريال"
        </div>
      </section>

      {/* Stores */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-8 text-center text-sm text-gray-500">
            نقارن الأسعار من المتاجر المختلفة
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Store name="Amazon.sa" icon="📦" />
            <Store name="Noon" icon="🟡" />
            <Store name="Trendyol" icon="🟠" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">
          كل ما تحتاجه قبل الشراء
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Feature
            icon="💰"
            title="مقارنة الأسعار"
            text="اعثر على أرخص سعر للقطعة بين المتاجر المختلفة."
          />

          <Feature
            icon="🤖"
            title="ذكاء اصطناعي"
            text="اكتب طلبك بشكل طبيعي ودع النظام يفهم ما تحتاجه."
          />

          <Feature
            icon="⚡"
            title="أفضل صفقة"
            text="لا نبحث عن الأرخص فقط، بل عن أفضل قيمة مقابل السعر."
          />
        </div>
      </section>

      {/* Example */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">مثال على نتيجة البحث</p>
              <h3 className="mt-2 text-2xl font-bold">
                NVIDIA RTX 5070
              </h3>
            </div>

            <div className="rounded-xl bg-green-400/10 px-4 py-2 text-sm text-green-400">
              أفضل سعر
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <Result
              store="Amazon.sa"
              price="2,399 ريال"
              rating="4.7"
            />

            <Result
              store="Noon"
              price="2,450 ريال"
              rating="4.6"
            />

            <Result
              store="Trendyol"
              price="2,315 ريال"
              rating="4.5"
              best
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-600">
        PCScout © 2026
      </footer>
    </main>
  );
}

function Store({ name, icon }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl">
        {icon}
      </div>

      <div>
        <div className="font-bold">{name}</div>
        <div className="mt-1 text-sm text-gray-500">
          مقارنة الأسعار
        </div>
      </div>

      <div className="mr-auto text-green-400">✓</div>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-5 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-gray-500">
        {text}
      </p>
    </div>
  );
}

function Result({ store, price, rating, best }) {
  return (
    <div className="flex items-center rounded-xl border border-white/10 bg-black/20 p-5">
      <div>
        <div className="font-bold">{store}</div>
        <div className="mt-1 text-sm text-gray-500">
          ⭐ {rating}
        </div>
      </div>

      <div className="mr-auto flex items-center gap-5">
        <span className="text-lg font-bold">{price}</span>

        {best && (
          <span className="rounded-lg bg-green-400 px-3 py-1 text-xs font-bold text-black">
            الأفضل
          </span>
        )}
      </div>
    </div>
  );
}
