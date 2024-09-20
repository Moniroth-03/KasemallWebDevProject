import React from "react";

const SocialLogin: React.FC = () => {
  return (
    <div className="social-login">
      <button className="bg-blue-600 text-white p-2 rounded-md w-full">Login with Facebook</button>
      <button className="bg-red-500 text-white p-2 rounded-md w-full mt-2">Login with Google</button>
    </div>
  );
};

export default SocialLogin;
