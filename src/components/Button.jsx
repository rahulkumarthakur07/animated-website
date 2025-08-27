import React from "react";

const Button = ({ title, containerClass, id, rightIcon, leftIcon }) => {
  return (
    <button
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass} `}
      id={id}
    >
   
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase" >
        <div>
            {title}
        </div>
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;
