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
          <header className="flex flex-col items-center w-full ">
            <div className="flex items-center w-[89.743vw] xs:w-[350px] sm:w-full h-[25.641vw] xs:h-[100px] gap-[4.102vw] xs:gap-[16px] sx:px-0 sm:px-[36px] py-[5.641vw] xs:py-[22px]">
              <Link href="/" className="h-full">
                <div className="w-[14.359vw] xs:w-[56px] h-full rounded-[2.051vw] xs:rounded-[8px] bg-[#62c991] bg-[url(/logo.svg)] bg-[length:7.149vw_5.592vw] xs:bg-[length:28px_21.81px] bg-no-repeat bg-center"></div>
              </Link>
              <div className="flex flex-col w-[33.333vw] xs:w-[130px] h-[11.282vw] xs:h-[44px]">
                <span
                  className={`${seravek.className} text-[#000000] text-[5.128vw] xs:text-[20px] font-black leading-[6.153vw] xs:leading-6 tracking-[.020em]`}
                >
                  Work time
                </span>
                <span
                  className={`${poppins.className} text-[#b1b1b1] text-[3.589vw] xs:text-[14px]`}
                >
                  HR management
                </span>
              </div>
            </div>
          </header>
          <main className="flex flex-grow justify-center">
            {children}
          </main>
          <footer className="w-full"></footer>
        </div>
      </body>
    </html>
  );
}
