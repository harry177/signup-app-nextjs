import Image from "next/image";

export default function Success() {
  return <div className="flex flex-col items-center">
    <div className="relative w-[350px] h-[177px]">
        <Image src="/big-logo.png" alt="" fill />
    </div>
    <span>Thank you for registering!</span>
  </div>;
}
