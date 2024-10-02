import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Josefin_Sans } from '@next/font/google';
import "./styles/globals.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/button.css";
import "./styles/section-1.css";
import "./styles/section-2.css";
import "./styles/section-3.css";
import "./styles/section-5.css";

import "./styles/signup page/signup.css";
import "./styles/searchpage/search.css";
import './styles/details.css';


export const metadata: Metadata = {
  title: "Click up",
  description: "Shop the difference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
