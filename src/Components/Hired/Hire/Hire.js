import React from 'react';

const Hire = (props) => {
    const { first_name, last_name} = props.hire;
    return (
        <div>
            <p>{first_name} {last_name}</p>
        </div>
    );
};

export default Hire;