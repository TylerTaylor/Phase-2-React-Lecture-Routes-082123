import React, { useState } from "react";

import Character from "./Character";
import NewCharacter from "./NewCharacter";

function Characters( { charArr, setCharArr, searchTerm } ) {

    const filteredCharArr = charArr.filter((charObj) => {
        return charObj.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const mappedCharArr = filteredCharArr.map((charObj) => (
        <Character
            key = {charObj.id}
            character = {charObj}
            charArr = {charArr}
            setCharArr = {setCharArr}
        />
    ))

    return (
        <div className="characters">
            {mappedCharArr}
            {/* TODO move the form to its own route */}
            <NewCharacter charArr = {charArr} setCharArr = {setCharArr} />
        </div>
    )

}

export default Characters;