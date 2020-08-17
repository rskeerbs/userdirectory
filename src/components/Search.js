import React from "react";
import "../styles/search.css"

function Search(props){
    return(
        <div className="search-area">
            <input type ="text" placeholder="search" onChange={event => props.handleSearch(event)}/>

        </div>
    )
}

export default Search;