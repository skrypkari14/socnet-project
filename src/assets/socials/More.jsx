import React from 'react';

const More = ({className}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-main dark:fill-second ${className}`}>
            <g clipPath="url(#clip0_44_8473)">
                <path
                    d="M2 14C3.10457 14 4 13.1046 4 12C4 10.8954 3.10457 10 2 10C0.89543 10 0 10.8954 0 12C0 13.1046 0.89543 14 2 14Z"
                    />
                <path
                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    />
                <path
                    d="M22 14C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10C20.8954 10 20 10.8954 20 12C20 13.1046 20.8954 14 22 14Z"
                    />
            </g>
            <defs>
                <clipPath id="clip0_44_8473">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default More;