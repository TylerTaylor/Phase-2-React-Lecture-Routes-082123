import React, { useState, useEffect } from "react";

// TODO 2 - Import Switch and Route from 'react-router-dom'

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

    // TODO 10 - create a Navbar and use NavLinks to create navigation. Place it outside of the router so it will always show

    return (
        <>
            {/* TODO 3 - set up Switch to wrap our routes */}
            {/* TODO 4 - create routes and refactor a bit */}
            <h2>character display</h2>
            
            <Search setSearchTerm = {setSearchTerm} />
            <br />
            <br />
            { charArr.length > 0 ? <Characters charArr = {charArr} setCharArr = {setCharArr} searchTerm = {searchTerm} /> : undefined }

            {/* TODO 5a - create route to show one character and create a component to handle this */}
        </>
    )
}

// export components so that files may be imported elsewhere
export default App;