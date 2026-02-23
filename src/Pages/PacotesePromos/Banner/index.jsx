import React from "react";

import cardBanner from '../Banner/imgBanner/cardBanner.jpg';

function Banner() {
    return (
        <div>
            <div className="card cardpct shadow-lg" style={{width:"85%", height:"20rem", margin:"1rem auto 2rem auto", borderRadius:"10px"}}>
                <img src={cardBanner} className="card-img" alt="Familia" style={{width:"100%", height:"100%", opacity:"0.9"}}/>
                    <div className="card-img-overlay" style={{color:"black", fontWeight:"bold"}}>
                        <h5 className="card-title" style={{color:"black", fontWeight:"bold"}}>Aproveite nossas Ofertas</h5>
                        <p className="card-text">Temos pacotes de todos os tipos e para todos os gostos, para férias incriveis!</p>
                    </div>
            </div>
        </div>
    );
}
export default Banner;