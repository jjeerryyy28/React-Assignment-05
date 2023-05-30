import { useState } from "react";

function Counter(props){
    console.log("Counter is Re-rendered");
    let [state, setState] = useState(0);
    var countVal = 0;
    const incCountVal = () => {
        setState(state + 1);
    }
    return(
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h2>Count Value is: {state}</h2>
            <button onClick={incCountVal}>Increase Count</button>
        </div>
    )
}

export default Counter;