import React from "react";

export default function Footer(){
    return(
        <div className="footer">
            <a href="https://twitter.com/JawelsDK" target={"_blank"} >
                <img className="twitter-icon" src="./Twitter Icon.svg" />
            </a>
            <a href="https://www.facebook.com/dipanshu.kumar.1426" target={"_blank"} >
                <img className="facebook-icon" src="./FacebookIcon.svg" />
            </a> 
            <a href="https://www.instagram.com/who_dippu/" target={"_blank"} >
                <img className="instagram-icon" src="./Instagram Icon.svg" />
            </a>
            <a href="https://github.com/iamDeepanshu9" target={"_blank"} >
                <img className="github-icon" src="./GitHubIcon.svg" />
            </a>
        </div>
    )
}