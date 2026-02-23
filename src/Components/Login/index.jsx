import React from "react";
import { Link } from "react-router-dom";
import '../Login/index.css';

function Login() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header" style={{backgroundColor:"rgb(245, 176, 210)", color: "aliceblue"}}>
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <i className="bi bi-envelope" style={{padding:"5px"}}></i>
                            <label for="formGroupExampleInput" className="form-label">Login</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite seu email" style={{width:"95%", borderRadius:"15px", borderColor:"rgb(245, 176, 210)"}} />
                        </div>
                        <div className="mb-3">
                            <i className="bi bi-eye-slash" style={{padding:"5px"}}></i>
                            <label for="formGroupExampleInput2" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="*****" style={{width:"95%", borderRadius:"15px", borderColor:"rgb(245, 176, 210)"}}/>
                            <p>Não possui conta? 
                                <Link className="cadastre-se" to="/cadastre-se" style={{textDecoration:"none", color:"#faaca8", cursor:"pointer"}}>Cadastre-se</Link> 
                                aqui!</p>
                            <button type="button" className="enviar" data-bs-dismiss="modal">Enviar</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn"><i className="bi bi-google">  Logar com Google</i></button>
                            <button type="button" className="btn"><i className="bi bi-facebook">  Logar com facebook</i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;