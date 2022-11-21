import React from "react";

export default function Info(){
    return(
        <div className="infoArea">
            <img src="https://avatars.githubusercontent.com/u/85389441?v=4" className="profileImg"></img>
           
            <div className="details">
                <h3 className="Name">Deepanshu Kumar</h3>
                <h5 className="designation">Web Developer</h5>
                <p className="website">deepanshukumar.me</p>
            </div>

            <div className="social">
                <a href="mailto: = dipanshu.kumar.1426@gmail.com">
                    <button className="mailButton">
                        <img src="./mail.svg" />
                        <span>Email</span>
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/deepanshu-kumar-697883202/" target={"_blank"}>
                    <button className="linkedIn">
                        <img src="./L.svg" />
                        <span>Linkedin</span>
                    </button>
                </a>
            </div>
        </div>
    )
}