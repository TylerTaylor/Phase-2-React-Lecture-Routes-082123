# *WELCOME TO REACT!*

## First things first:
## 1. Run the React app with `npm start`
## 2. Optionally, start the JSON server in a new terminal with `json-server --watch db.json` (we will use this during the state and events and following lectures)
## 3. Check that all has been installed and "app component" is logged to the console

## Deliverables

1. Review App setup
2. Submit the edit form and make a `PATCH` request
	1. create `handleSubmit` and start a `PATCH` request
	2. Included the updated state values in the `PATCH` request
	3. Update the ___ state in the parent component (using `.map`)
		- The goal is to return a new array, with the original __ excluded, and the newly updated __ included
	4. Reset the form after submission is complete 
4. Click the `delete` button and make a `DELETE` request
	1. Attach an `onClick` event listener to the delete button
	2. Add a `DELETE` fetch request to the event handler for the delete button
	3. Update the ___ state in the parent component (using `.filter`)
		- The goal is to return a new array with the deleted project excluded 