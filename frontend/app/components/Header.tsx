// components/Header.tsx
"use client";
import Link from "next/link";
import { PlaneTakeoff, User } from "lucide-react"; // Assuming you're using Lucide for icons
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../atoms";
import Image from "next/image";
import logo from "../../public/Images/logo/logo.png";
export default function Header() {
  const router = useRouter();
  const [userEmail,setUserEmail]=useRecoilState(userAtom);

  const handleAuthAction = () => {
    if (userEmail) {
      // If logged in, log out
      setUserEmail(null);
      router.push("/");
    } else {
      // If not logged in, redirect to login page
      router.push("/auth");
    }
  };

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-red-500 text-white">
      <Link className="flex items-center justify-center" href="/">
      <Image src={logo} alt="logo" width={50} height={50} />
      
        <span className="text-xl font-bold">Sparrow Airlines</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/ticket"
        >
          Chuyến đi sắp tới
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
        <button
      type="button"
      className="bg-white text-sky-500 hover:bg-sky-100 px-4 py-2 flex items-center text-sm"
      onClick={handleAuthAction}
    >
      <User className="h-4 w-4 mr-2" />
      {userEmail ? "Logout" : "Login"}
    </button>
      </nav>
    </header>
  );
}
