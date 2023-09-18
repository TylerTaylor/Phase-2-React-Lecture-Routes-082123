import React from "react";

// TODO remember to accept charArr and setCharArr as props here
function Character( { character } ) {
    // TODO create state to toggle the form visibility
    // TODO create state to track form data

    // TODO Add edit form / function
        // send PATCH request using this character's id
        // update parent state
        // hide / reset form

    // TODO Add delete button / function
        // send DELETE request using this character's id
        // update parent state to trigger re-render

    function displayForm() {
      if (showForm) {
        return (
          <form onSubmit={handleEdit} className="edit-form">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              value={""}
              onChange={""}
            />

            <label htmlFor="species">Species</label>
            <input 
              type="text" 
              name="species" 
              value={""}
              onChange={""}
            />

            <label htmlFor="color">Color</label>
            <input 
              type="text" 
              name="color" 
              value={""}
              onChange={""}
            />

            <label htmlFor="isHappy">Is Happy</label>
            <input 
              type="text" 
              name="isHappy" 
              value={""}
              onChange={""}
            />

            <label htmlFor="quote">Quote</label>
            <input 
              type="text" 
              name="quote" 
              value={""}
              onChange={""}
            />

            <label htmlFor="image">Image</label>
            <input 
              type="text" 
              name="image" 
              value={""}
              onChange={""}
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

        {/* TODO create edit / delete buttons and wire up onClick events */}
      </div>
    )
}

export default Character;