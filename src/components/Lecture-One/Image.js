import React from "react";

function Image( { name } ) {

    console.log("image component");

    console.log(name)

    return (
        <>
            <p>This is {name} again:</p>
            <img
                src = "https://i.ebayimg.com/images/g/GnkAAOSwLwhfeM3b/s-l1200.webp"
                alt = "Picture of me"
            />
            <img
                src = "https://cdn.xxl.thumbs.canstockphoto.com/fun-word-stars-starburst-entertainment-amusement-the-word-fun-in-a-burst-of-colorful-stars-clipart_csp9916211.jpg"
                alt = "Fun image!"
                className = "special-image"
            />
        </>
    )
}

export default Image;