import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Toast from "@/components/Toast";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petgram",
  description: "Rede social para amantes de pets!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Toast />
      </body>
    </html>
  );
}
