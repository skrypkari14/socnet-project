import React from 'react';

const Filter = ({...props}) => {
    return (
        <svg {...props} width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14 24L8 19.5V14.38L0 5.38V3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0L19 0C19.7956 0 20.5587 0.31607 21.1213 0.87868C21.6839 1.44129 22 2.20435 22 3V5.38L14 14.38V24ZM10 18.5L12 20V13.62L20 4.62V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V4.62L10 13.62V18.5Z"
                />
        </svg>

    );
};

export default Filter;