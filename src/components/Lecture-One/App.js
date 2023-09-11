import React from "react";

// import necessary components from files
import Header from "./Header";
import ImageComponent from "./ImageComponent";
import Footer from "./Footer";

function App() {

    // console.log("app component");

    const name = "Eleanor";
    const timeWithReact = 2;
    const surname = "Kelman";

    return (
        <>
            <Header name = {name} timeWithReact = {timeWithReact} />
            <ImageComponent name = {name} />
            <Footer name = {name} timeWithReact = {timeWithReact} surname = {surname} />
        </>
    )

}

// export components so that files may be imported elsewhere
export default App;