import React, { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + props.clickcount);
    }
    return (
        <div>
            <button onClick={increment}>Click</button>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;