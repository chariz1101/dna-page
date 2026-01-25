import Image from "next/image";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative -mt-[72px]">
        <Image
          src="/banner1.svg"
          alt="D.N.A. Banner"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 top-60 left-10">
          <h1 className="text-6xl font-bold text-white">
            DANCING NURSES ASSOCIATION
          </h1>
          <a className="text-4xl font-light text-white mt-2 block">
            Central Philippine University - College of Nursing
            </a>
          <a className="text-5xl font-light italic text-white mt-30 ml-30 block">
            "One blood,
            </a>
          <a className="text-5xl font-light italic text-white ml-40 block">
            One gene."
            </a>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center">
        <a>Hi!</a>
      </div>
    </div>
  );
}
