import React, { useEffect, useState } from 'react'

// TODO 6 - import useParams from 'react-router-dom'
import { useParams } from 'react-router-dom'

import Character from './Character'

function CharacterDetail({ charArr, setCharArr }) {
    const [character, setCharacter] = useState({})

    // TODO 7 - use useParams to grab the id from the URL
    const { id } = useParams()

    // TODO 8 - fetch the character using its ID and store it in state
    useEffect(() => {
        fetch(`http://localhost:8004/characters/${id}`)
            .then(res => res.json())
            .then(character => setCharacter(character))
    }, [])

    // TODO 9 - display the character details: refactor to use the whole Character component we already have!

    return (
        <div className="character-detail">
            <h1>{character.name} Details</h1>
            {/* Pass the character information to the existing Character component */}
            <Character
                key = {character.id}
                character = {character}
                charArr = {charArr}
                setCharArr = {setCharArr}
            />
        </div>
    )

}

export default CharacterDetail;