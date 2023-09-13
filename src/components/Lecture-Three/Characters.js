import React, { useState } from "react";

import Character from "./Character";

function Characters( { charArr } ) {

    const [isClicked, setIsClicked] = useState(false) // click toggle

    function handleClick(e) {
        if (isClicked) {
            setIsClicked(false)
        }
        else {
            setIsClicked(true)
        }

        // isClicked ? setIsClicked(false) : setIsClicked(true)

        // setIsClicked(!isClicked)
    }

    console.log(isClicked)

    const filteredCharArr = charArr.filter((charObj) => {
        // filter only "brown characters" if clicked
        if (isClicked) {

            if (charObj.color == "brown") {
                return true
            }
            else {
                return false
            }

            return charObj.color == "brown" ? true : false

            return charObj.color == "brown"

        }
        // otherwise automatically return all characters
        else {
            return true
        }
    })

    // console.log(filteredCharArr)

    // sends each key:value pair from array
    const charArrToRender = filteredCharArr.map((charObj) => (
        <Character
            key = {charObj.id}
            color = {charObj.color}
            image = {charObj.image}
            isHappy = {charObj.isHappy}
            name = {charObj.name}
            species = {charObj.species}
        />
    ))

    // sends entire object from array
    // const charArrToRender = charArr.map((charObj) => {
    //     return <Character
    //         key = {charObj.id}
    //         character = {charObj}
    //     />
    // })

    // const charArrToRender = charArr.map((charObj) => <Character key = {charObj.id} color = {charObj.color} image = {charObj.image} isHappy = {charObj.isHappy} name = {charObj.name} species = {charObj.species} />)

    return (
        <>
            <>
                <button onClick = {handleClick}>SHOW { isClicked ? "ALL" : "BROWN" } CHARACTERS</button>
                {/* {isClicked ? <button onClick = {handleClick} >SHOW ALL CHARACTERS</button> : <button onClick = {handleClick}>SHOW BROWN CHARACTERS</button>} */}
            </>
            <div id = "contains-all-characters">
                {/* renders all characters from array */}
                {charArrToRender}
            </div>
        </>
    )

}

export default Characters;