import React, { useState, useEffect } from "react";

// import necessary components from files
import Search from "./Search";
import Characters from "./Characters";

function App() {

    const [charArr, setCharArr] = useState([])

    // necessary to prevent infinite state refresh loop
    useEffect(() => {
        fetch("http://localhost:8004/characters")
            .then((resp) => resp.json())
            .then((data) => setCharArr(data))
    }, [])

    return (
        <>
            <>
                <h2>character display</h2>
            </>
            <>
                <Search />
                <br />
                <br />
                <Characters charArr = {charArr} />
            </>
        </>
    )

}

// export components so that files may be imported elsewhere
export default App;