import React, { useState, useEffect } from "react";

// import necessary components from files
import Search from "./Search";
import Characters from "./Characters";

function App() {

    const [charArr, setCharArr] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    // necessary to prevent infinite state refresh loop
    useEffect(() => {
        fetch("http://localhost:8004/characters")
            .then((resp) => resp.json())
            .then((data) => setCharArr(data))
    }, [])

    return (
        <>
            <h2>character display</h2>
            
            <Search setSearchTerm = {setSearchTerm} />
            <br />
            <br />
            { charArr.length > 0 ? <Characters charArr = {charArr} setCharArr = {setCharArr} searchTerm = {searchTerm} /> : undefined }
        </>
    )

}

// export components so that files may be imported elsewhere
export default App;