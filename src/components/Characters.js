import React, { useState } from "react";

import Character from "./Character";
import NewCharacter from "./NewCharacter";

function Characters( { charArr, setCharArr, searchTerm } ) {

    const filteredCharArr = charArr.filter((charObj) => {
        return charObj.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    // TODO: Character component will need the charArr and setCharArr - pass them here as props
    const mappedCharArr = filteredCharArr.map((charObj) => (
        <Character
            key = {charObj.id}
            character = {charObj}
            charArr = {charArr}
            setCharArr = {setCharArr}
        />
    ))

    return (
        <>
            {mappedCharArr}
            <NewCharacter charArr = {charArr} setCharArr = {setCharArr} />
        </>
    )

}

export default Characters;