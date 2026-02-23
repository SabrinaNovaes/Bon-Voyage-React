import React from "react";

function CardsPromo({ foto, titulo, diarias, valor, promocao }) {
    return (
        <div>
            <div className="cards" >
                <div className="card cardbs" style={{width:"18rem"}}>
                    <img src={foto} className="card-img-top" alt="" style={{borderRadius:"5px", height:"10rem", width:"100%"}}/>
                    <div className="card-body">
                        <h6 className="card-title">{titulo}</h6>
                        <ul className="text" style={{justifyContent:"center", fontWeight:"bold", listStyle:"none", fontSize:"11px"}}>
                            <li><i className="bi bi-calendar"> {diarias} diárias</i></li>
                            <li><i className="bi bi-house"></i> Quarto</li>
                            <li><i className="bi bi-cup"></i> Café da manhã</li>
                        </ul>
                        <p className="promo" style={{textAlign:"left", marginBottom:"0px", fontSize:"11px"}}>De <a className="de" style={{color:"black", textDecoration:"line-through", fontSize:"13px"}}>{valor}</a></p>
                        <p className="cards-text" >Por <a className="por" style={{color:"red", textDecoration:"none", fontSize:"14px"}}>{promocao}</a></p>
                        <a className="btn btn-card" style={{width:"100%", margin:"auto", alignItems:"center", justifyContent:"center", backgroundColor:"rgb(245 176 210)" }}>Compre agora</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardsPromo;