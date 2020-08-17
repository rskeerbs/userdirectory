import React from "react";
import "../styles/header.css";

function Header(){
    return(
        <div className = "jumbotron">
            <div className = "container">
                <h1>Employee Directory</h1>
                <p>Click on name header to sort or use search box to narrow your results.</p>
            </div>
        </div>
    )

}

export default Header;