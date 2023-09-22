import React, { useState, useEffect } from "react";

// TODO 2 - Import Switch and Route from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

// import necessary components from files
import Search from "./Search";
import Characters from "./Characters";
import Home from "./Home";
import NewCharacter from "./NewCharacter";
import CharacterDetail from "./CharacterDetail";
import Navbar from "./Navbar";

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
            <Navbar />
            {/* TODO 3 - set up Switch to wrap our routes */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/characters">
                    <Characters 
                        charArr = {charArr} 
                        setCharArr = {setCharArr} 
                        searchTerm = {searchTerm} 
                        setSearchTerm = {setSearchTerm}
                    />
                </Route>

                <Route exact path="/add_character">
                    <NewCharacter charArr = {charArr} setCharArr = {setCharArr} />
                </Route>

                <Route path="/characters/:id">
                    <CharacterDetail charArr = {charArr} setCharArr = {setCharArr} />
                </Route>
            </Switch>
            {/* TODO 4 - create routes and refactor a bit */}
            
            <br />
            <br />
            {/* { charArr.length > 0 ? <Characters charArr = {charArr} setCharArr = {setCharArr} searchTerm = {searchTerm} /> : undefined } */}

            {/* TODO 5a - create route to show one character and create a component to handle this */}
            
        </>
    )
}

// export components so that files may be imported elsewhere
export default App;