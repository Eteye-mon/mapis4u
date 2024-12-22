"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/images/authlogo.png";
import bgImage from "../../public/images/rightImage.png"


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  }, [router]);

  return (
    <main className="md:flex lg:flex xl:flex h-screen bg-[#141460]  items-center justify-center md:px-20 xl:px-20 lg:px-20 md:py-8 xl:py-8 bg-[url('https://www.mapis4u.com/img/login_page_left_bg.png')] bg-cover bg-cente">
      <div>
        <Image src={logo} width={260} height={58} alt="app logo" />
      </div>
    </main>
  );
}
