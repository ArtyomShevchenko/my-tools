import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div style={{fontFamily: "monospace", fontSize: "2rem", color: "green"}}>
                        Logo
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;