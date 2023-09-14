import React from "react";

function Character( { character } ) {

    // console.log(character)

    return (
        <div className = "character">
            <h2>{character.name}</h2>
            <img src = {character.image} alt = {character.name} />
            { character.isHappy ? <h3>{character.name} is happy!</h3> : <h3>{character.name} is sad.</h3> }
        </div>
    )
}

export default Character;