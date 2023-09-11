import React from "react";

// prop destructuring
function Footer( { name, timeWithReact, surname } ) {

    console.log("footer component")

    // prop destructuring
    // const { name, timeWithReact, surname } = props

    return (
        <div id = "footer">
            <p>This is {name}'s Footer component!</p>
            <p>She has still spent {timeWithReact} minutes with React!</p>
            <p>Copyright of {surname} Productions.</p>
        </div>
    )
}

export default Footer;