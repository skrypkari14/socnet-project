import React from 'react';

const ArrowDown = ({...props}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M12 15.4961C11.7374 15.4966 11.4772 15.4451 11.2346 15.3447C10.9919 15.2443 10.7715 15.097 10.586 14.9111L5.29297 9.61713L6.70697 8.20312L12 13.4961L17.293 8.20312L18.707 9.61713L13.414 14.9101C13.2285 15.0962 13.0081 15.2437 12.7655 15.3443C12.5228 15.4448 12.2626 15.4965 12 15.4961Z"
                />
        </svg>
    );
};

export default ArrowDown;