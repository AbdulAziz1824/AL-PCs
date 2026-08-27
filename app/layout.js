export const metadata = {
  title: "PCScout",
  description: "موقع البحث عن قطع الكمبيوتر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
