import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="footer">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <p>Sobre nós</p>
                                    <li>Quem somos</li>
                                    <li>Contatos</li>
                                    <li>Trabalhe Conoso</li>
                                </ul>
                            </div>
                            <div className="col order-1">
                                <ul>
                                    <p>Minha conta</p>
                                    <li>Minhas viagens</li>
                                    <li>Meu perfil</li>
                                    <li>Documentos</li>
                                </ul>
                            </div>
                            <div className="col order-1">
                                <ul>
                                    <p>Garantias</p>
                                    <li>Politica de Privacidade</li>
                                    <li>Termos e condições</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div className="col order-1" >
                                <p>Siga-nos nas redes sociais</p>
                                <div className="icons" style={{alignItems:"center", justifyContent:"center", fontSize:"16px", display:"flex"}}>
                                    <i className="icone bi-facebook" style={{padding:"5px", cursor:"pointer"}}></i>
                                    <i className="icone bi-instagram" style={{padding:"5px", cursor:"pointer"}}></i>
                                    <i className="icone bi-twitter" style={{padding:"5px", cursor:"pointer"}}></i>
                                    <i className="icone bi-youtube" style={{padding:"5px", cursor:"pointer"}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyrigth">
                    <p style={{textAlign:"center", fontSize:"10px"}}>&copy; Todos os Direitos Reservados</p>
                </div>
            </div>
        );
    }
}

export default Footer;