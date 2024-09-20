"use client";
import { IoPersonSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaLock, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section className="h-full bg-Bg ">
      <div className=" bg-white rounded-3xl max-w-2xl mx-auto">
        <h1 className="pt-7 pb-4 text-2xl font-bold text-center text-navBorder">
          Register Customer
        </h1>
        <form action="" className="max-w-xl mx-auto ">
          <div className="flex flex-col mb-5 relative">
            <label
              htmlFor="username"
              className="mb-3 px-3 font-medium text-gray-600"
            >
              CustomerName
            </label>
            <div className="relative flex items-center space-x-4 ">
              <IoPersonSharp className="absolute left-9 text-navBg text-xl" />
              <input
                type="username"
                placeholder="username"
                className="pl-14 pr-10 text-gray-400 shadow-xl w-full border-2 border-gray-50 rounded-xl p-3 px-5  focus:border-lgGreen focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-5 relative">
            <label
              htmlFor="phone-input"
              className="mb-3 px-3 font-medium text-gray-600"
            >
              Phone Number
            </label>
            <div className="relative flex items-center space-x-4 ">
              <FaPhone className="absolute left-9 text-navBg text-xl" />
              <input
                type="text"
                placeholder="phone number"
                className="pl-14 pr-10 text-gray-400 shadow-xl w-full border-2 border-gray-50 rounded-xl p-3 px-5  focus:border-lgGreen focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-5 relative">
            <label
              htmlFor="password"
              className="mb-3 px-3 font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative flex items-center space-x-4">
              <FaLock className="absolute left-9 text-navBg text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="********"
                className="pl-14 pr-10 text-gray-400 shadow-xl w-full border-2 border-gray-50 rounded-xl p-3 px-5  focus:border-lgGreen focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute right-9 text-navBg text-lg focus:outline-none"
              >
                {showPassword ? (
                  <FaEye className="text-navBg" />
                ) : (
                  <FaEyeSlash className="text-navBg" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-10 relative">
            <label
              htmlFor="password"
              className="mb-3 px-3 font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <div className="relative flex items-center space-x-4">
              <FaLock className="absolute left-9 text-navBg text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="********"
                className="pl-14 pr-10 text-gray-400 shadow-xl w-full border-2 border-gray-50 rounded-xl p-3 px-5  focus:border-lgGreen focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute right-9 text-navBg text-lg focus:outline-none"
              >
                {showPassword ? (
                  <FaEye className="text-navBg" />
                ) : (
                  <FaEyeSlash className="text-navBg" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-navBorder hover:bg-navBg focus:ring-4 focus:ring-green-100 rounded-xl w-full px-5 py-2.5 text-center mb-6"
            onClick={() => router.push("/")}
          >
            Register
          </button>
          <p className="font-medium text-gray-600 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-600  after:mt-0.5 after:flex-1 after:border-t after:border-gray-600 mb-6">
            or
          </p>
          <button className="shadow-xl border-2 font-medium text-gray-600 flex items-center justify-center w-full border-gray-100 hover:border-l-gBlue hover:border-t-gRed hover:border-r-gYellow hover:border-b-gGreen px-5 py-2.5 rounded-xl mb-6">
            <FcGoogle className="text-2xl mr-2" />
            Sign up with Google
          </button>
          <button className="font-medium text-gray-600 shadow-xl border-2 flex justify-center w-full border-gray-100 ocus:border-l-4  hover:border-blue-700 px-5 py-2.5 rounded-xl mb-6">
            <FaFacebook className="mr-2 text-blue-700 text-2xl" />
            Sign up with Facebook
          </button>
          <h1 className="pt-3 pb-5 font-medium text-gray-600">
            Already have an Account?
          </h1>
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 rounded-xl w-full px-5 py-2.5 text-center mb-12"
            onClick={() => router.push("/customer/login")}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
