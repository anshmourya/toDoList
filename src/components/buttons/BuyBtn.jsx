import React from "react";

function BuyBtn() {
  return (
    <div className="w-20 h-8 p-1 text-center bg-gray-600 rounded-md cursor-pointer flex items-center justify-around">
      <span className="">
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="8.22" cy="8.525" rx="8.22" ry="8.525" fill="#3772FF" />
          <path
            d="M11.2529 12H9.85291L6.68291 7.21V12H5.28291V5.01H6.68291L9.85291 9.81V5.01H11.2529V12Z"
            fill="#FEFEFE"
          />
        </svg>
      </span>
      $0.90
    </div>
  );
}

export default BuyBtn;
