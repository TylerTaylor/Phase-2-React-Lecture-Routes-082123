import React, { useState } from "react";
import { Link } from "react-router-dom";

function Character( { character, charArr, setCharArr } ) {
    const [showForm, setShowForm] = useState(false)

    const [formData, setFormData] = useState({
      name: character.name,
      species: character.species,
      color: character.color,
      isHappy: character.isHappy,
      quote: character.quote,
      image: character.image
    })

    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    function handleEdit(e) {
      e.preventDefault()

      // send PATCH request using this character's id
      fetch(`http://localhost:8004/characters/${character.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(updatedCharacter => {
          // console.log(updatedCharacter)
          const updatedChars = charArr.map(originalCharacter => {
            if (originalCharacter.id === updatedCharacter.id) {
              return updatedCharacter
            } else {
              return originalCharacter
            }
          })

          // update parent state
          setCharArr(updatedChars)

          // hide / reset form
          // e.target.reset() // moot
          setShowForm(!showForm)
        })
    }

    function handleDelete() {
      // send DELETE request using this character's id
      fetch(`http://localhost:8004/characters/${character.id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(() => {
        // update aprent state to trigger re-render
        const updatedChars = charArr.filter(char => char.id !== character.id)

        setCharArr(updatedChars)
      })
    }

    function displayForm() {
      if (showForm) {
        return (
          <form onSubmit={handleEdit} className="edit-form">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="species">Species</label>
            <input 
              type="text" 
              name="species"
              value={formData.species}
              onChange={handleChange}
            />

            <label htmlFor="color">Color</label>
            <input 
              type="text" 
              name="color" 
              value={formData.color}
              onChange={handleChange}
            />

            <label htmlFor="isHappy">Is Happy</label>
            <input 
              type="text" 
              name="isHappy" 
              value={formData.isHappy}
              onChange={handleChange}
            />

            <label htmlFor="quote">Quote</label>
            <input 
              type="text" 
              name="quote" 
              value={formData.quote}
              onChange={handleChange}
            />

            <label htmlFor="image">Image</label>
            <input 
              type="text" 
              name="image" 
              value={formData.image}
              onChange={handleChange}
            />

            <input type="submit" value="Submit" />
          </form>
        )
      }
    }

    return (
      <div className = "character">
        {/* TODO 5b - Link to the character show page */}
        <Link to={`/characters/${character.id}`}><h2>{character.name}</h2></Link>
        
        <img src = {character.image} alt = {character.name} />
        { character.isHappy ? <h3>{character.name} is happy!</h3> : <h3>{character.name} is sad.</h3> }

        { displayForm() }

        <div className="buttons">
          <button onClick={() => setShowForm(!showForm)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    )
}

export default Character;