import React from "react";

interface SubmitButtonProps {
  label: string;
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded-lg w-full">
      {label}
    </button>
  );
};

export default SubmitButton;
