import React, { useState } from "react";

// TODO remember to accept charArr and setCharArr as props here
function Character( { character, charArr, setCharArr } ) {
    // TODO create state to toggle the form visibility
    const [showForm, setShowForm] = useState(false)

    // "name": "Winnie the Pooh",
    // "species": "bear",
    // "color": "yellow",
    // "isHappy": true,
    // "quote" : "People say nothing is impossible, but I do nothing every day.",
    // "image": "https://logowik.com/content/uploads/images/winnie-the-pooh-with-honey5619.logowik.com.webp"

    // TODO create state to track form data
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

    // TODO Add edit form / function
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

    // TODO Add delete button / function
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
      // TODO set up a condition here, we only want to show form if the state is true
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
        <h2>{character.name}</h2>
        <img src = {character.image} alt = {character.name} />
        { character.isHappy ? <h3>{character.name} is happy!</h3> : <h3>{character.name} is sad.</h3> }

        {/* TODO call our function to display the form here */}
        { displayForm() }

        {/* TODO create edit / delete buttons and wire up onClick events */}
        <div className="buttons">
          <button onClick={() => setShowForm(!showForm)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    )
}

export default Character;