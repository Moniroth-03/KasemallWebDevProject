"use client";
import { FaPhone } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Verifycode() {
  const router = useRouter();
  return (
    <section className="h-screen bg-Bg ">
      <div className=" bg-white rounded-3xl max-w-2xl mx-auto">
        <h1 className="pt-11 pb-4 text-2xl font-bold text-center text-navBorder">
          Verification Code
        </h1>
        <p className="font-medium text-gray-800 mx-16 text-center">
          We have sent the OTP code to{" "}
          <strong className="break-words font bold"> 023456819</strong> for
        </p>
        <p className="text-center font-medium text-gray-800 mb-14">
          {" "}
          the verification process.
        </p>
        <div className="space-x-2 mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            className="focus:outline-none text-black text-lg bg-gray-400 font-bold rounded-2xl px-8 py-3 me-2 mb-14"
          >
            1
          </button>
          <button
            type="button"
            className="focus:outline-none text-black text-lg bg-gray-400 font-bold rounded-2xl px-8 py-3 me-2 mb-14"
          >
            2
          </button>
          <button
            type="button"
            className="focus:outline-none text-black text-lg bg-gray-400 font-bold rounded-2xl px-8 py-3 me-2 mb-14"
          >
            3
          </button>
          <button
            type="button"
            className="focus:outline-none text-black text-lg bg-gray-400 font-bold rounded-2xl px-8 py-3 me-2 mb-14"
          >
            4
          </button>
        </div>
        <div className="space-x-2 mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            className="focus:outline-none text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-xl px-10 py-3 me-2 mb-14"
            onClick={() => router.push("/customer/forgetpassword")}
          >
            Back
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-navBorder hover:bg-navBg focus:ring-4 focus:ring-green-100 font-medium rounded-xl px-10 py-3 me-2 mb-14"
            onClick={() => router.push("/customer/resetpassword")}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
