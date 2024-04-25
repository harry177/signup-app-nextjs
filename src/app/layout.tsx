import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
const seravek = localFont({ src: "../../public/seravek.ttf" });

export const metadata: Metadata = {
  title: "Work time Sign up form",
  description: "Simple Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="flex items-center w-full h-[100px] px-[36px] py-[22px] gap-[16px]">
            <Link href="/" className="h-full">
              <div className="w-[56px] h-full rounded-[8px] bg-[#62c991] bg-[url(/logo.svg)] bg-[length:28px_21.81px] bg-no-repeat bg-center"></div>
            </Link>
            <div className="flex flex-col w-[130px] h-[44px]">
              <span
                className={`${seravek.className} text-[#000000] text-[20px] font-black leading-6 tracking-[.020em]`}
              >
                Work time
              </span>
              <span
                className={`${poppins.className} text-[#b1b1b1] text-[14px]`}
              >
                HR management
              </span>
            </div>
          </header>
          <main className="flex flex-grow justify-center items-center">
            {children}
          </main>
          <footer className="w-full"></footer>
        </div>
      </body>
    </html>
  );
}
