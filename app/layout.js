export const metadata = {
  title: "PCScout",
  description: "البحث عن أفضل أسعار قطع الكمبيوتر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
