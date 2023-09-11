import React from "react";

// prop passing without destructuring
function Header(props) {

    console.log("header component");

    // console.log(props)

    return (
        <div id = "header">
            <h1>This is {props.name}'s Header component!</h1>
            <h3>This is her {props.timeWithReact}nd time coding in React!</h3>
        </div>
    )
}

export default Header;