import React from "react";

const year = new Date().getFullYear();

function Footer() {
    return(
        <footer>
            <p> Copyright: Winston Lin </p>
            <p> {year} </p>
        </footer>
    )
}

export default Footer;