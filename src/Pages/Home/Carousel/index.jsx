import React from "react";

import Malas from '../Carousel/img/malas.jpg';
import Paris from "../Carousel/img/Paris.jpg";
import Grecia from "../Carousel/img/Grécia.jpg";
import Praia from "../Carousel/img/praiasol.jpg";
import Machu from "../Carousel/img/machu-picchu-.jpg";

function Carousel (){
    return(
        <main id="carouselExampleFade" className="carousel slide carousel-fade shadow-lg" data-bs-ride="carousel" style={{width:"95%", height:"25rem", borderRadius:"15px", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 2rem auto"}}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Malas} className="" alt="malas no aeroporto" style={{width:"100%", height:"25rem", borderRadius:"15px"}}/>
          </div>
          <div className="carousel-item">
            <img src={Paris} className="" alt="Paris-França"  style={{width:"100%", height:"25rem", borderRadius:"15px"}}/>
          </div>
          <div className="carousel-item">
            <img src={Grecia} className="" alt="Paisagem Grécia" style={{width:"100%", height:"25rem", borderRadius:"15px"}}/>
          </div>
          <div className="carousel-item">
            <img src={Praia} className="" alt="praia-do-caribe" style={{width:"100%", height:"25rem", borderRadius:"15px"}}/>
          </div>
          <div className="carousel-item">
            <img src={Machu} className="" alt="praia-do-caribe" style={{width:"100%", height:"25rem", borderRadius:"15px"}}/>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    );
}

export default Carousel;