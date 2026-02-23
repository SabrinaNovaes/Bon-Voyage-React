import React from "react";
import { Link } from "react-router-dom";

import Login from "../Login";

import './index.css';

function Header() {
    return (
        <div className="header">
            <nav className="navbar fixed-top navbar navbar-expand-lg shadow-lg" style={{ backgroundColor: "rgb(245 176 210)", width: "100%", opacity: "0.9" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ color: "aliceblue" }}>
                        <h1>Bon Voyage</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-justify" style={{ color: "aliceblue", fontSize: "25px", border: "none" }}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Link className="nav-links" aria-current="page" to="/home" style={{
                            color: "aliceblue", justifyContent: "center", alignItems: "center", textDecoration: "none", padding: "8px", fontSize: "16px", margin: "auto"
                        }}>
                            Home
                        </Link>
                        <Link
                            className="nav-links" to="/pctsepromos" style={{ color: "aliceblue", justifyContent: "center", alignItems: "center", textDecoration: "none", padding: "8px", fontSize: "16px", margin: "auto" }}>
                            Pacotes e Promoções
                        </Link>
                        <Link
                            className="nav-links" to="/faleconosco" style={{ color: "aliceblue", justifyContent: "center", alignItems: "center", textDecoration: "none", padding: "8px", fontSize: "16px", margin: "auto" }}>
                            Fale Conosco
                        </Link>
                        <Link 
                            className="nav-links" to="/Login" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{
                                color: "aliceblue", display: "flex", justifyContent: "center",
                                alignItems: "center", textDecoration: "none", padding: "8px", fontSize: "16px", margin: "auto"
                            }}>
                            Login
                        </Link>
                        <Link
                            className="perfil" style={{ border: "none", background: "none", fontSize: "25px", color: "aliceblue", display: "flex", alignItems: "center", justifyContent: "center", margin: "auto" }} type="button" to="/canvas" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-person-circle"></i>
                        </Link>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default Header;