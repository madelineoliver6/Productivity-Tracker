import React from "react";

const Navbar = () =>{

    return(
        <nav className="navbar">
            <a href = "/" className="navigation">My Bujo </a>   
            <ul>
                <li>
                    <a href="/DailyView"> Daily View</a>
                </li>
                <li>
                    <a href="/WeeklyView"> Weekly View</a>
                </li>
                <li>
                    <a href="/MonthlyView"> Monthly View</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar