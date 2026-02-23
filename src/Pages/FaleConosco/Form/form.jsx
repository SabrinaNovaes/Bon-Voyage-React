import React from "react";

function Form () {
    return (
        <div className="form" style={{margin: "7rem 20px 0 20px"}}>
            <form className="row g-3 formulario">
                <div className="col-md-12">
                    <label for="nome" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nome" placeholder="Digite seu nome" />
                </div>
                <div className="col-md-6">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
                </div>
                <div className="col-6">
                    <label for="password" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="password" placeholder="*******" />
                </div>
                <div className="col-md-6">
                    <label for="cidade" className="form-label">Cidade</label>
                    <input type="text" className="form-control" id="cidade" placeholder="Rio de Janeio" />
                </div>
                <div className="col-md-4">
                    <label for="estado" className="form-label">Estado</label>
                    <select id="estado" className="form-select">
                        <option selected>Selecione</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="cep" className="form-label">Cep</label>
                    <input type="number" className="form-control" id="Cep" placeholder="00000-000" />
                </div>
                <div className="col-12">
                </div>
            </form>
        </div>
    );
}
export default Form;