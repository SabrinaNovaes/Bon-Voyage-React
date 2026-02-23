import Destaque from '../../Components/Destaque';

import Banner from './Banner';
import CardsPromo from './Cards/cardsPromo';
import CardsNormal from './Cards/CardsNormal';

import Tambau from './Cards/imgCards/hotel-tambau.jpg';
import Japao from './Cards/imgCards/japao.jpg';
import Paris from './Cards/imgCards/paris1.png';
import Londres from './Cards/imgCards/londres.jpg';

import Miami from './Cards/imgCards/miami.jpg';
import Madrid from './Cards/imgCards/madrid.jpg';
import Recife from './Cards/imgCards/recife.jpg';
import Cancun from './Cards/imgCards/cancun.jpg';

import Gramado from './Cards/imgCards/gramado.jpg';
import RJ from './Cards/imgCards/riodejaneiro.jpg';
import SP from './Cards/imgCards/saopaulo.jpg';
import Brasilia from './Cards/imgCards/brasilia.jpg';

import Disney from './Cards/imgCards/DisneyWorld.jpg';
import Beach from './Cards/imgCards/beachpark.jpg';
import BetoCarrero from './Cards/imgCards/betoCarrero.jpg';
import Hopi from './Cards/imgCards/hopihari.png';

import Veneza from './Cards/imgCards/veneza.jpg';
import Machu from './Cards/imgCards/machu-picchu-.jpg';
import NY from './Cards/imgCards/novaiorque.jpg';
import Taj from './Cards/imgCards/TajMahal.jpg';

import Turquia from './Cards/imgCards/turquia.jpg';
import Atenas from './Cards/imgCards/atenas.png';
import Lencois from './Cards/imgCards/lencois.jpg';
import Canarias from './Cards/imgCards/canarias.jpg';

function PacotesePromocoes() {
    return (
        <div className='PacotesePromos'>

            <div style={{ marginTop:"7rem" }}>
                <Destaque Destaques="Conheça Nossas Ofertas" />
            </div>

            <Banner />

            <div style={{ margin: "2rem" }}>
                <Destaque Destaques="Promoções" />
            </div>

            <div className='Cards'>
                <CardsPromo foto={Tambau} titulo="Pacotes de viagens para João Pessoa, Paraiba" diarias="5" valor="R$ 780" promocao="560" />
                <CardsPromo foto={Japao} titulo="Pacotes de viagens para Tóquio, Japão" diarias="4" valor="R$ 1200" promocao="R$ 890" />
                <CardsPromo foto={Paris} titulo="Pacotes de viagens para Paris, França" diarias="7" valor="R$ 2650" promocao="R$ 1390" />
                <CardsPromo foto={Londres} titulo="Pacotes de viagens para Londres, Inglaterra" diarias="6" valor="R$ 2190" promocao="R$ 1250" />
            </div>

            <div style={{ margin: "2rem" }}>
                <Destaque Destaques="Top destinos mais procurados" />
            </div>

            <div className='Cards'>
                <CardsNormal foto={Miami} titulo="Pacotes de viagens para Miami, Flórida" diarias="5" valor="R$ 1350" />
                <CardsNormal foto={Madrid} titulo="Pacotes de viagens para Madrid, Espanha" diarias="7" valor="R$ 1699" />
                <CardsNormal foto={Recife} titulo="Pacotes de viagens para Recife, Pernambuco" diarias="3" valor="R$ 549" />
                <CardsNormal foto={Cancun} titulo="Pacotes de viagens para Cancun, México" diarias="4" valor="R$ 1049" />
            </div>

            <div style={{ margin: "2rem" }}>
                <Destaque Destaques="Viagens Nacionais" />
            </div>

            <div className='Cards'>
                <CardsNormal foto={Gramado} titulo="Pacotes de viagens para Gramado, Rio grande do sul" diarias="5" valor="R$ 890" />
                <CardsNormal foto={SP} titulo="Pacotes de viagens para São Paulo, Cápital" diarias="6" valor="R$ 990" />
                <CardsNormal foto={RJ} titulo="Pacotes de viagens para o Rio de Janeiro, Cápital" diarias="3" valor="R$ 749" />
                <CardsNormal foto={Brasilia} titulo="Pacotes de viagens para Destrito Federal, Brasilia" diarias="4" valor="R$ 980" />
            </div>

            <div style={{ margin: "2rem" }}>
                <Destaque Destaques="Viagens para a Família" />
            </div>

            <div className='Cards'>
                <CardsNormal foto={Disney} titulo="Pacotes de viagens para DisneyWorld - Orlando, Flórida" diarias="7" valor="R$ 2690" />
                <CardsNormal foto={BetoCarrero} titulo="Pacotes de viagens para Beto Carrero World, Santa Catarina" diarias="6" valor="R$ 949" />
                <CardsNormal foto={Beach} titulo="Pacotes de viagens para Beach Park, Fortaleza" diarias="4" valor="R$ 690" />
                <CardsNormal foto={Hopi} titulo="Pacotes de viagens para Hopi Hari, São Paulo" diarias="5" valor="R$ 760" />
            </div>

            <div style={{ margin: "2rem" }}>
                <Destaque Destaques="Destinos internacionais" />
            </div>

            <div className='Cards'>
                <CardsNormal foto={Veneza} titulo="Pacotes de viagens para Veneza, Itália" diarias="4" valor="R$ 1260" />
                <CardsNormal foto={Machu} titulo="Pacotes de viagens para Machu Picchu, Péru" diarias="5" valor="R$ 890" />
                <CardsNormal foto={NY} titulo="Pacotes de viagens para Manhattan, Nova York" diarias="4" valor="R$ 1980" />
                <CardsNormal foto={Taj} titulo="Pacotes de viagens para Taj Mahal, India" diarias="6" valor="R$ 1460" />
            </div>

            <div style={{ margin: "2rem" }}>
                <Destaque Destaques="Novos destinos" />
            </div>

            <div className='Cards'>
                <CardsNormal foto={Turquia} titulo="Pacotes de viagens para Istambul,Túrquia" diarias="5" valor="R$ 2460" />
                <CardsNormal foto={Atenas} titulo="Pacotes de viagens para Atenas, Grécia" diarias="4" valor="R$ 1390" />
                <CardsNormal foto={Lencois} titulo="Pacotes de viagens para Lençois Maranhenses" diarias="7" valor="R$ 990" />
                <CardsNormal foto={Canarias} titulo="Pacotes de viagens para Ilhas Canárias, Espanha" diarias="6" valor="R$ 1690" />
            </div>
            <hr />
        </div>
    );
}
export default PacotesePromocoes;