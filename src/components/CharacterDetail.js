import React, { useEffect, useState } from 'react'

// TODO 6 - import useParams from 'react-router-dom'

import Character from './Character'

function CharacterDetail({ charArr, setCharArr }) {

    // TODO 7 - use useParams to grab the id from the URL

    // TODO 8 - fetch the character using its ID and store it in state

    // TODO 9 - display the character details: refactor to use the whole Character component we already have!

    return (
        <div className="character-detail">
            <h1>___ Details</h1>
            {/* Pass the character information to the existing Character component */}
        </div>
    )

}

export default CharacterDetail;