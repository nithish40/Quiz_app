import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./card";
import "./home.css"
import "./styles/userpage.css";
function Userpage() {
    const { username } = useParams(); // Get the username from the URL

    
    function logout(){
        
    }
    return (
        <div>
            <nav>
                {/* <Example></Example> */}
                <div className="contents">
                    <h2 className="Courses tag">courses </h2>
                    <h2 className="Tutorials tag">tutorials </h2>
                    {/* <h2 className="Practise tag">practise </h2> */}
                    <Link to="/user/:username/practise">Practise</Link>
                    <h2 className="new tag">New</h2>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </nav>
            <div className="dashboard">
                <Card 
                    imageSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"}
                    title={"React"}
                    description={"Beginner to Advanced"}
                />
                <Card
                    imageSrc={"https://static.ditdot.hr/images/info/ux-ui/ux-ui-00.png"}
                    title={"UI UX"}
                    description={"learn Designing"}
                />
                <Card
                    imageSrc={"https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1"}
                    title={"Python"}
                    description={"Beginner to Advanced"}
                />
                <Card
                    imageSrc={"data:image/png;base64,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"}
                    title={"Java"}
                    description={"DSA and OOPS in Java"}
                />
            </div>
        </div>
    );
}

export default Userpage;
