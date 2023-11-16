import React from "react"
import { Link, NavLink, redirect, useNavigate } from "react-router-dom"

export default function Header() {
    const isLoggedIn = localStorage.getItem("loggedin")
    const history = useNavigate()
    
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        
        if(!localStorage.removeItem("Loggedin")) {
            history("/")
        }
    }
    
    function signIn(){
       return isLoggedIn ? "hidden" : ""
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className={`login-link ${signIn()}`}>
                    <img 
                        src="../assets/images/avatar-icon.png" 
                        className={`login-icon ${signIn()}`}
                    />
                </Link>
                <button onClick={fakeLogOut}>x</button>
            </nav>
        </header>
    )
}