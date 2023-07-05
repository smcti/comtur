import React, { useState } from 'react';

type SingleCheckProps = {
    name: string;
    value: string;
    goTo: string;
    defaultGoTo: string;
    data: Array<{
        value: string;
        label: string;
    }>;
};

const SingleCheck = (props: SingleCheckProps) => {
    const [state, setState] = useState(false);

    const handleChange = () => {
        setState(!state);
        console.log(state);
    };

    return (
        <div className='flex gap-2 singleCheck'>
            <input
                className=""
                id={props.name}
                type="checkbox"
                name={props.name}
                step={state ? props.goTo : props.defaultGoTo}
                onChange={() => handleChange()}
            />
            <label htmlFor={props.name}>{props.data[0].label}</label>
        </div>
    );
};

export default SingleCheck;
