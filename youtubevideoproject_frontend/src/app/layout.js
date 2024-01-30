import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AllDownload4u",
  description:
    "Download Youtube Videos in all formats. AllDownload4u project is created in collaborations with codexharoon and usman.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
