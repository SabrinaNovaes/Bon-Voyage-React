import React from "react";

function TextA() {

    return (
        <div style={{margin: "0 20px 0 20px"}}>
            <label>Comente Aqui</label>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Deixe seu cometario" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                <label for="floatingTextarea2"></label>
            </div>
            <div className="form-check" style={{margin:"15px"}}>
                <label className="form-check-label" for="gridCheck"><input className="form-check-input" type="checkbox" id="gridCheck" />
                    Desejo comentar anonimamente
                </label>
            </div>
            <div className="col-12">
                <button type="submit" className="btn" value="Exibir alert" style={{width:"8rem", margin:"auto", alignItems:"center", justifyContent:"center", backgroundColor:"black"}}>Enviar</button>
            </div>
        </div>
    );
}

export default TextA;