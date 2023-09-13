import React, { useState, useEffect } from "react";

// import necessary components from files
import Characters from "./Characters";

function App() {

    const [charArr, setCharArr] = useState([])

    // necessary to prevent infinite state refresh loop
    useEffect(() => {
        fetch("http://localhost:8004/characters")
            .then((resp) => resp.json())
            .then((data) => setCharArr(data))
    }, [])

    // conditional render to ensure content in array when it passed as prop
    return (
        <>
            {charArr.length > 0 ? <Characters charArr = {charArr} /> : undefined}
        </>
    )

    if (charArr.length > 0) {
        return (
            <>
                <Characters charArr = {charArr} />
            </>
        )
    }
    else {
        return (
            <></>
        )
    }

}

// export components so that files may be imported elsewhere
export default App;