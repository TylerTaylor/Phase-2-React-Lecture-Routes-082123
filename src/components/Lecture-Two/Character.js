import React, { useState } from "react";

function Character( { character } ) {

    const [inGoodMood, setInGoodMood] = useState(character.isHappy)

    console.log(inGoodMood)

    // toggling click event
    function handleClick() {
        if (inGoodMood == true) {
            setInGoodMood(false)
        }
        else {
            setInGoodMood(true)
        }

        // setInGoodMood(!inGoodMood)
    }

    // conditional render using toggling state
    return (
        <>
            <img onClick = { handleClick } src = {character.image} alt = {character.name} />
            {/* <img onClick = { () => setInGoodMood(!inGoodMood) } src = {character.image} alt = {character.name} /> */}
            <p>Is Eeyore Happy? { inGoodMood ? "Yes!" : "No :(" }</p>
            {/* { character.isHappy ? <p>Is Eeyore Happy? Yes!</p> : <p>Is Eeyore Happy? No </p> } */}
        </>
    )

}

export default Character;