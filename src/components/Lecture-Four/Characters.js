import React, { useState } from "react";

import Character from "./Character";
import NewCharacter from "./NewCharacter";

function Characters( { charArr, setCharArr, searchTerm } ) {

    const filteredCharArr = charArr.filter((charObj) => {
        if (charObj.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true
        }
        else {
            return false
        }

        // ternary operator
        // return charObj.name.toLowerCase().includes(searchTerm.toLowerCase()) ? true : false

        // return charObj.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const mappedCharArr = filteredCharArr.map((charObj) => (
        <Character
            key = {charObj.id}
            character = {charObj}
        />
    ))

    return (
        <>
            <>{mappedCharArr}</>
            <><NewCharacter charArr = {charArr} setCharArr = {setCharArr} /></>
        </>
    )

}

export default Characters;