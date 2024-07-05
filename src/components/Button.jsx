import React from 'react';

const Button = ({ onClick, children, className = '', ...props }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center rounded-[20px] font-bold gap-2 text-xl ${className}`}
        {...props}
    >
        {children}
    </button>
);
export default Button;