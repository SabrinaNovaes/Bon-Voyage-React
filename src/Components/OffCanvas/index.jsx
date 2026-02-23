import React from "react";
import '../OffCanvas/index.css';


function Canvas() {
    return (
        <div className="canvas">
            <div className="offcanvas-header" style={{ backgourndColor: "rgb(245, 176, 210)", opacity: "0.8" }}>
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Perfil</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <i className="conta bi-person-circle" style={{ fontSize: "85px", justifyContent: "center", alignItems: "center", display: "flex", margin: "1rem" }}></i>
                <p style={{ textAlign: "center", fontSize: "15px" }}>Minha Conta</p>
                <div className="info">
                    <label><i className="icons bi-person"></i>Nome</label>
                    <label><i className="icons bi-envelope"></i>Email</label>
                    <label><i className="icons bi-eye-slash"></i>Senha</label>
                    <label><i className="icons bi-bag"></i>Minhas compras</label>
                    <label><i className="icons bi-credit-card-2-back"></i>Informações de Pagamento</label>
                    <label><i className="icons bi-gear"></i>configurações</label>
                    <label><i className="icons bi-x"></i>Sair</label>
                </div>
            </div>
        </div>
    );
}

export default Canvas;