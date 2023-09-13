import React from "react";

function Character(props) {

    // console.log(props)

    // renders JSX for each object in array
    return (
        <div>
            <h2>{props.name}</h2>
            <img src = {props.image} alt = {props.name} />
            <p>Species: {props.species}</p>
            <p>Color: {props.color}</p>
            <p>{props.isHappy ? `${props.name} is happy!` : `${props.name} is sad.`}</p>
            {props.isHappy ? <p>{props.name} is happy!</p> : <p>{props.name} is sad</p>}
        </div>
    )
}

export default Character;