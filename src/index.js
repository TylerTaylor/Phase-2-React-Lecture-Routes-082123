// import React packages
import React from "react";
import ReactDOM from "react-dom";

// import necessary components from files
// import App from "./components/Lecture-One/App";
import App from "./components/App"

import "./stylesheets/lecture-4.css"

// component
function Index() {

    // returns JSX
    return (
        <App />
    )
}

// renders component to DOM (creating first child node of DOM tree)
ReactDOM.render(<Index />, document.querySelector('#root'))