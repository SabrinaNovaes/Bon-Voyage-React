import React from "react";
import './index.css';

function BarraNavegacao() {
    return (
        <div className="nav-barra" style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"7rem auto 2rem auto"}}>
            <div className="search" style={{backgroundColor: "#ffff", opacity:"0.6", borderRadius: "15px", width: "80%", padding: "15px", display:"flex",justifyContent: "space-evenly"}}>
                <div id="locais" style={{display:"flex", flexDirection:"column", fontSize:"15px"}}>
                    <label className="nav-label">Para onde você vai?</label>
                    <input className="barra-nav" type="text" placeholder="Escolha um destino" style={{border:"none", display:"flex", textAlign:"center", justifyContent:"center", width:"100%"}}/>
                </div>
                <div id="hotel" style={{display:"flex", flexDirection:"column", fontSize:"15px"}}>
                    <label className="nav-label">Tipo de Hotel</label>
                    <input className="barra-nav" type="text" placeholder="Hoteis" style={{border:"none", display:"flex", textAlign:"center", justifyContent:"center", width:"100%"}}/>
                </div>
                <div id="data" style={{display:"flex", flexDirection:"column", fontSize:"15px"}}>
                    <label className="nav-label">Data de ida</label>
                    <input className="barra-nav" placeholder="01/01/2022" id="date" type="date" style={{border:"none", display:"flex", textAlign:"center", justifyContent:"center", width:"100%"}}/>
                </div>
            </div>
            <button className="barra-search" style={{border:"none", padding:"15px", marginLeft:"20px", borderRadius:"50px", backgroundColor:"rgb(245 176 210)", fontSize:"20px", color:"aliceblue"}}><i className="bi bi-search" style={{cursor:"pointer"}}></i></button>
        </div>
    );
}

export default BarraNavegacao;