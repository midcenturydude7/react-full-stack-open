import React from "react";

const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me!
            </button>
        </div>
    );
}

export default Counter;