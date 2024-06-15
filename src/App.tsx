import { useState } from "react";

export const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>Calculator remoto</div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 2)}>Incrementar</button>
        </>
    );
};
