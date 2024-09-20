"use client";
import { FaPhone } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Homepage() {
  const router = useRouter();
  return (
    <section className="h-screen bg-Bg ">
      <div className=" bg-white rounded-3xl max-w-2xl mx-auto">
        <h1 className="pt-11 pb-4 text-2xl font-bold text-center text-navBorder">
          Forget Password
        </h1>
        <p className="font-medium text-gray-800 mx-16 text-center">
          Enter your account{" "}
          <strong className="break-words font bold">Shop</strong> phone number
          and access
        </p>
        <p className="text-center font-medium text-gray-800 mb-14">
          {" "}
          your shop account again.
        </p>
        <div className="flex flex-col mb-5 relative">
          <label
            htmlFor="phone-input"
            className="mb-5 mt-7 mx-5 px-3 font-medium text-gray-600"
          >
            Phone Number
          </label>
          <div className="mx-8 mb-6 relative flex items-center space-x-4 ">
            <FaPhone className="absolute left-9 text-navBg text-xl" />
            <input
              type="text"
              placeholder="phone number"
              className="pl-14 pr-10 text-gray-400 shadow-xl w-11/12 border-2 border-gray-50 rounded-xl p-3 px-5  focus:border-lgGreen focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="space-x-2 mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            className="focus:outline-none text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-xl text-base px-10 py-3 me-2 mb-14"
            onClick={() => router.push("/shop/login")}
          >
            Back
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-navBorder hover:bg-navBg focus:ring-4 focus:ring-green-100 font-medium rounded-xl text-base px-10 py-3 me-2 mb-14"
            onClick={() => router.push("/shop/verifycode")}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
