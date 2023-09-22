# *WELCOME TO REACT!*

## First things first:
1. Run the React app with `npm start`
2. Start the JSON server in a new terminal with `npm run server`

## TODO:
- Add a "landing page"
- Move the characters component to its own route
- Make a route for a single character - demo fetching by ID
- Make a route for the form

## Deliverables

1. Install and setup react router
	1. Note: React Router has been updated to v6, but v5 is used in the curriculum - so we'll use v5. If you want to upgrade, read here: https://reactrouter.com/en/main/upgrading/v5
	2. To install (v5) run this command in your terminal: `npm install react-router-dom@5` - otherwise, v6 will be installed by default
	3. Wrap the whole `App` component with `BrowserRouter` - a component that we will import from the `react-router-dom` library
2. Use Switch and Route to set up initial routes (`/characters`, `/add_character`, `/characters/:id` etc)
	1. Import the `Switch` component from `react-router-dom` and wrap the components designated for routing
	2. Import the `Route` component from `react-router-dom` and wrap each individual component designated for routing
		1. Provide the `path` prop to the `Route` component to create a URL path associated with a particular component
	3. Check each route in the browser to confirm desired outcome is occurring
	4. `exact` - what is it and why do we need it?
3. Add navigation to the app by using the `Link` / `NavLink` components