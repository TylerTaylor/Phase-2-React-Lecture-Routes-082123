import React, { useState, useEffect } from "react";

// import necessary components from files
import Search from "./Search";

function App() {

    let [count, setCount] = useState(0) // strictly for demoing `useEffect` hook

    return (
        <>
            <>
                <h2 onClick = {(e) => setCount(count += 1)}>character display</h2>
            </>
            <>
                <Search />
                <br />
                <br />
                {/* display characters here */}
            </>
        </>
    )
}

// export components so that files may be imported elsewhere
export default App;