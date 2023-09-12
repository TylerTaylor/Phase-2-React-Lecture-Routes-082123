import React, { useState, useEffect } from "react";

// import necessary components from files
import Character from "./Character";

function App() {

    // set state with getter and setter
    const [charArr, setCharArr] = useState([]) // state is charArr

    // fetch characters from server
    useEffect(() => {
        fetch("http://localhost:8004/characters")
            .then((resp) => resp.json())
            .then((data) => setCharArr(data))
    }, []) // fetch only once per page load

    // conditional renders

    /*
    if (charArr.length > 0) {
        return (
            <>
                <h2>character display</h2>
                <div id = "single-image">
                    <Character character = { charArr[3] } />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <h2>character display</h2>
                <div id = "single-image"></div>
            </>
        )
    }
    */

    // ternary operator syntax
    // condition ? if true do : if false do
    return (
        <>
            <h2>character display</h2>
            <div id = "single-image">
                { charArr.length > 0 ? <Character character = {charArr[3]} /> : undefined }
            </div>
        </>
    )

}

// export components so that files may be imported elsewhere
export default App;