import React from "react";

function NewCharacter( { charArr, setCharArr } ) {

    function addNewChar(e) {
        
        e.preventDefault()

        /*
        let isHappy

        if (e.target.happiness.value.toLowerCase() == "yes") {
            isHappy = true
        }
        else {
            isHappy = false
        }
        */

        const newChar = {
            "name" : e.target.name.value,
            "image" : e.target.image.value,
            "color" : e.target.color.value,
            "species" : e.target.species.value,
            "isHappy" : e.target.happiness.value == "yes" || e.target.happiness.value == "Yes" ? true : false
        }

        fetch("http://localhost:8004/characters", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newChar)
        })
        .then((resp) => resp.json())
        .then((postedNewChar) => setCharArr([...charArr, postedNewChar]))

        e.target.reset()

    }

    return (
        <>
            <form onSubmit = {(e) => addNewChar(e)}>
                <input placeholder = "character's name" name = "name" />
                <input placeholder = "character's image url" name = "image" />
                <input placeholder = "character's color" name = "color" />
                <input placeholder = "character's species" name = "species" />
                <input placeholder = "is character happy?" name = "happiness" />
                <input type = "submit" value = "submit" />
            </form>
        </>
    )
}

export default NewCharacter;