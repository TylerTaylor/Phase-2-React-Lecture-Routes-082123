import React, { useState, useEffect } from "react";

// import necessary components from files

function App() {

    // fetch characters from server
    useEffect(() => {
        fetch("http://localhost:8004/characters")
            .then((resp) => resp.json())
            .then((data) => console.log(data))
    }, []) // fetch only once per page load

    return (
        <>
            <h2>character display</h2>
            <div id = "single-image">
            </div>
        </>
    )

}

// export components so that files may be imported elsewhere
export default App;