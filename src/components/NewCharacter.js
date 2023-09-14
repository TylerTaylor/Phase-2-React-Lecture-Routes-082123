import React from "react";

function NewCharacter() {

    return (
        <>
            <form>
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