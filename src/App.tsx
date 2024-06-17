import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>Calculator remoto</div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 2)}>Incrementar</button>
        </>
    );
};

export default App;
