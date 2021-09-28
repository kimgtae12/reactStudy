import React, { useState, useEffect } from 'react';


function Toggle() {

    const [condition, setCondition] = useState(true);

    useEffect(() => {
        console.log(condition);
    }, [condition]);

    const toggle = () => {
        setCondition(!condition);
    }

    const renderCondition = condition ? 'True' : 'False';

    return (
        <div>
            <p>{renderCondition}</p>
            <button onClick={toggle}>toggle</button>
        </div>
    );
}

export default Toggle;