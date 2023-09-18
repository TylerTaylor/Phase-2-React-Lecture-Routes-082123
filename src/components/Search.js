import React from "react";

function Search( { setSearchTerm } ) {

    return (
        <div>
            <form>
                <input onChange = {(e) => setSearchTerm(e.target.value)} placeholder = "search term" />
            </form>
        </div>
    )

}

// export components so that files may be imported elsewhere
export default Search;