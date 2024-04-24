import localFont from "next/font/local";
import { SignupForm } from "@/components/SignupForm/SignupForm";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });
const seravek = localFont({ src: "../../public/seravek.ttf" });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center w-full h-[100px] px-[36px] py-[22px] gap-[16px]">
        <div className="w-[56px] h-full rounded-[8px] bg-[#62c991] bg-[url(/logo.svg)] bg-[length:28px_21.81px] bg-no-repeat bg-center"></div>
        <div className="flex flex-col w-[130px] h-[44px]">
          <span className={`${seravek.className} text-[#000000] text-[20px] font-extrabold leading-6`}>Work time</span>
          <span className={`${poppins.className} text-[#b1b1b1] text-[14px]`}>HR managment</span>
        </div>
      </header>
      <main className="flex flex-grow justify-center items-center">
        <SignupForm />
      </main>
      <footer className="w-full h-[100px] text-[16px] text-[#5b5b5b] p-[36px]">Help@worktime.go</footer>
    </div>
  );
}
