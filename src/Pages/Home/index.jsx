import Destaque from "../../Components/Destaque";
import BarraNavegacao from "./BarraPesquisa";
import Card from "./Card";
import React, { lazy, Suspense } from "react";

import './index.css';

import Louvre from './Card/imgCard/louvre.jpeg';
import familia from './Card/imgCard/familia.jpg';
import Bahamas from './Card/imgCard/bahamas.png';
import RiodeJaneiro from './Card/imgCard/rj.jpg';
import CardText from "./CardText";

const Carousel = React.lazy(() => import ("./Carousel"));

function index() {
    return (
        <div className="index">
            <BarraNavegacao />

            <div>
                <Suspense fallback={
                    <div>
                        Carregando...
                    </div>
                }>
                <Carousel /> 
                </Suspense>
            </div>
          
            <div style={{ padding: "20px" }}>
                <Destaque Destaques="Ofertas Imperdiveis" />
            </div>

            <div className='' style={{ marginLeft: "8rem" }}>
                <Card Foto={RiodeJaneiro} titulo="Cristo-Redentor" Legenda="Pacotes de viagens com Destinos Nacionais" />
                <Card Foto={Louvre} titulo="Louvre-museu" Legenda="Pacotes de viagens com Destinos Internacionais" />
                <Card Foto={Bahamas} titulo="ferias-bahamas" Legenda="Pacotes de viagens para férias inesqueciveis" />
                <Card Foto={familia} titulo="ferias-familia" Legenda="Pacotes para férias em Família" />
            </div>

            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "20px", borderRadius: "15px" }}>
                <CardText titulo="Viajar Conosco" />
                <CardText titulo="Suas milhas" />
                <CardText titulo="Sobre Nós" />
            </div>
            <hr />
        </div>
    );
}

export default index;