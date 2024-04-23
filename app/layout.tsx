import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Carrot Market",
    default: "Carrot Market"
  },
  description: "Sell and buy all the thing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 text-white max-w-screen-sm min-h-screen mx-auto`}>
        {children}
      </body>
    </html>
  );
}
