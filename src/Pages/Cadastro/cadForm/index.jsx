import React, { useState } from "react";
import axios from "axios";

import '../index.css';
import { Navigate } from "react-router-dom";

function Cad() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvar = async (e) => {
        e.preventDefault();
        console.log(nome, sobrenome, cpf, data_nascimento, telefone, email, senha);
        await axios
        .post("http://localhost:8080/usuario", {
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            data_nascimento: data_nascimento,
            telefone: telefone,
            email: email,
            senha: senha,
        })
        .then((result) => {
            alert("Usuário cadastrado");
            Navigate("/");
        })
        .catch((erro) => {
            console.log(erro);
        });
   };

   const [rua, setRua] = useState('');
   const [numero, setNumero] = useState('');
   const [cep, setCep] = useState('');
   const [bairro, setBairro] = useState('');
   const [cidade, setCidade] = useState('');
   const [estado, setEstado] = useState('');

   const save = async (e) => {
    e.preventDefault();
        console.log(rua, numero, cep, bairro, cidade, estado);
        await axios
        .post("http://localhost:8080/endereco", {
            rua: rua,
            numero: numero,
            cep: cep,
            bairro: bairro,
            cidade: cidade,
            estado: estado
        })
        .then((result) => {
            alert("Usuário cadastrado");
            Navigate("/");
        })
        .catch((erro) => {
            console.log(erro);
        });
   };

    return (
        <div className="cadastro-form">
            <form className="cadastro" style={{alingItems:"center", justifyContent:"cetner", backgroundColor:"white", width:"53%", margin:"10rem auto", borderRadius:"25px", padding:"30px", opacity:"0.7" }}>
                <div className="row">
                    <h2 style={{textAlign:"center"}}>Cadastro</h2>
                    <hr />
                    <h4 style={{textAlign:"center"}}>Dados Pessoais</h4>
                    <div className="col">
                        <label className="dados_pessoais">Nome</label>
                        <input type="text" className="cad" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="dados_pessoais">Sobrenome</label>
                        <input type="text" className="cad" placeholder="Digite seu sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="dados_pessoais">CPF</label>
                        <input type="number" className="cad" placeholder="Digite seu cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="dados_pessoais">Data de Nascimento</label>
                        <input type="date" className="cad" placeholder="" value={data_nascimento} onChange={(e) => setData_nascimento(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="dados_pessoais">Email</label>
                        <input type="email" className="cad" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="dados_pessoais">Senha</label>
                        <input type="password" className="cad" placeholder="*******" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="dados_pessoais">Telefone</label>
                        <input type="tel" className="cad" placeholder="(00)0000-0000" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                    </div>
                </div>
                <hr />
                <h4 style={{textAlign:"center"}}>Endereço</h4>
                <div className="row">
                <div className="col">
                        <label className="endereco">Rua</label>
                        <input type="text" className="cad" placeholder="Digite o nome da Rua" value={rua} onChange={(e) => setRua(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="endereco">Nº</label>
                        <input type="number" className="cad" placeholder="Digite o número" value={numero} onChange={(e) => setNumero(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="endereco">Bairro</label>
                        <input type="text" className="cad" placeholder="Digite o bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                    </div>
                    <div className="col">
                        <label className="endereco">Cidade</label>
                        <input type="text" className="cad" placeholder="Digite sua cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="endereco">Estado</label>
                        <input type="text" className="cad" placeholder="Digite seu Estado" value={estado} onChange={(e) => setEstado(e.target.value)}/>
                    </div>
                    <div className="col">
                        <label className="endereco">CEP</label>
                        <input type="text" className="cad" placeholder="00000-000" value={cep} onChange={(e) => setCep(e.target.value)}/>
                    </div>
                </div>
                <hr />
                <div className="col-12">
                <button type="submit" className="btn" onclick="cadastro()" value="Exibir alert" style={{width:"8rem", margin:"2rem auto auto auto", alignItems:"center", justifyContent:"center", color:"black", borderColor:"black"}} onClick={salvar}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Cad;