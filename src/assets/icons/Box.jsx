import React from 'react';

const Box = ({...props}) => {
    return (
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M11.1211 0L0.621094 6V18L11.1211 24L21.6211 18V6L11.1211 0ZM18.6341 6.6L11.0111 10.852L3.67209 6.56L11.1211 2.3L18.6341 6.6ZM2.62109 8.262L9.99909 12.574V21.056L2.62109 16.839V8.262ZM11.9991 21.194V12.587L19.6211 8.336V16.836L11.9991 21.194Z"
                />
        </svg>

    );
};

export default Box;