import React from "react";

import Image from "./Image";

function ImageComponent( { name } ) {

    console.log("imagecomponent component");

    return (
        <>
            <div>
                <h2>Picture of {name}</h2>
            </div>
            <div>
                <Image name = {name} />
            </div>
        </>
    )
}

export default ImageComponent;