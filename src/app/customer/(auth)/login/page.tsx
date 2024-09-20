"use client";
import { IoPersonSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaLock, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // const loginData = {
    //   fcm_token: "local",
    //   phone: phone,
    //   password: password,
    //   device_type: "Android",
    // };

    const loginData = {
      fcm_token: "local",
      phone: "1234567890", // Hardcoded phone number
      password: "password123", // Hardcoded password
      device_type: "Android",
    };

    try {
      const response = await fetch("https://kasemall1.kasegro.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          console.error("Login failed. Error Data:", errorData);
          alert("Login failed: " + errorData.message);
        } else {
          const errorText = await response.text();
          console.error("Login failed. Error Text:", errorText);
          alert("Login failed: " + errorText);
        }
        return;
      }

      const data = await response.json();
      console.log("Login successful! Response data:", data);
      alert("Login successful!");
      router.push("/");
    } catch (error) {
      console.error("Error caught in try/catch block:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <section className="h-screen bg-Bg ">
      <div className="bg-white rounded-3xl max-w-2xl mx-auto">
        <h1 className="pt-11 pb-7 text-2xl font-bold text-center text-navBorder">
          Login Customer
        </h1>
        <form onSubmit={handleLogin} action="" className="max-w-xl mx-auto">
          <div className="flex flex-col mb-10 relative">
            <label
              htmlFor="phone"
              className="mb-3 px-3 font-medium text-gray-600"
            >
              Phone Number
            </label>
            <div className="relative flex items-center space-x-4">
              <IoPersonSharp className="absolute left-9 text-navBg text-xl" />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-14 pr-10 text-gray-400 shadow-xl w-full border-2 border-gray-50 rounded-xl p-3 px-5 focus:border-lgGreen focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-10 relative">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-14 pr-10 text-gray-400 shadow-xl w-full border-2 border-gray-50 rounded-xl p-3 px-5 focus:border-lgGreen focus:outline-none"
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
          <div className="mb-6 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border bg-gray-50 border-gray-300 focus:ring-4 ring-blue-100"
              />
              <label
                htmlFor="remember"
                className="ms-3 font-medium text-gray-600"
              >
                Remember Me
              </label>
            </div>
            <a
              href="/customer/forgetpassword"
              className="font-bold hover:underline text-blue-600"
            >
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className="text-white bg-navBorder hover:bg-navBg focus:ring-4 focus:ring-green-100 rounded-xl w-full px-5 py-2.5 text-center mb-8"
          >
            Login
          </button>
          <p className="font-medium text-gray-600 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-600  after:mt-0.5 after:flex-1 after:border-t after:border-gray-600 mb-8">
            or
          </p>
          <button className="shadow-xl border-2 font-medium text-gray-600 flex items-center justify-center w-full border-gray-100 hover:border-l-gBlue hover:border-t-gRed hover:border-r-gYellow hover:border-b-gGreen px-5 py-2.5 rounded-xl mb-8">
            <FcGoogle className="text-2xl mr-2" />
            Continue with Google
          </button>
          <button className="font-medium text-gray-600 shadow-xl border-2 flex justify-center w-full border-gray-100 focus:border-l-4 hover:border-blue-700 px-5 py-2.5 rounded-xl mb-6">
            <FaFacebook className="mr-2 text-blue-700 text-2xl" />
            Continue with Facebook
          </button>
          <h1 className="pt-5 pb-7 font-medium text-gray-600">
            No Account yet?
          </h1>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 rounded-xl w-full px-5 py-2.5 text-center mb-12"
            onClick={() => router.push("/customer/register")}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
