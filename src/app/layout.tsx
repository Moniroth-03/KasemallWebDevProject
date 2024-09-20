import type { Metadata } from "next";

import "./globals.css";

import Image from "next/image";
import CambodiaFlag from "./CamFlag.png";
import { FiSearch } from "react-icons/fi";
import { IoChatbubbleSharp, IoNotifications } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaChevronRight, FaUser } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kasemall Web Development",
  description: "by EK Moniroth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-full bg-Bg">
        <section>
          <nav className="flex space-x-10 items-center justify-center w-full mx-auto max-w-screen-xl">
            <div className="pt-5 flex items-center space-x-3 text-navBorder ml-20">
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold">Kasemall</h1>
                <div className="relative">
                  <Image
                    className="rounded-full aspect-square object-cover"
                    width={30}
                    height={30}
                    src="/CamFlag.png"
                    alt={"Cambodia Flag"}
                  />
                </div>
              </div>
            </div>

            <div className="pt-5 relative right-8 left flex items-center space-x-10">
              <FiSearch className="absolute ml-14 text-gray-600 text-xl" />
              <input
                id="password"
                placeholder="Search..."
                className="pl-12 font-medium placeholder-gray-500 pr-10 shadow-xl w-70 border-2 border-gray-50 rounded-3xl p-3 text-gray-700 focus:border-gray-500 focus:outline-none bg-gray-300"
                required
              />
              <div className="flex space-x-8 ml-8">
                <div className="flex space-x-2">
                  <Link
                    href="/shop/create"
                    className="font-bold hover:underline text-black"
                  >
                    Create Shop
                  </Link>
                  <p className="font-bold text-gray-700">or</p>
                  <Link
                    href="/shop/login"
                    className="font-bold hover:underline text-black"
                  >
                    Login
                  </Link>
                </div>
                <div className="flex space-x-2">
                  <Link
                    href="/customer/login"
                    className="font-bold hover:underline text-black"
                  >
                    Login User
                  </Link>
                  <p className="font-bold text-gray-700">or</p>
                  <Link
                    href="/customer/register"
                    className="font-bold hover:underline text-black"
                  >
                    Register
                  </Link>
                </div>
                <IoChatbubbleSharp className="left-9 text-navBg text-lg" />
                <IoNotifications className="left-9 text-navBg text-xl" />
                <FaCartShopping className="left-9 text-navBg font-extrabold text-lg" />
                <FaUser className="left-9 text-navBg font-extrabold text-lg" />
              </div>
            </div>
          </nav>
        </section>
        {children}
      </body>
    </html>
  );
}
