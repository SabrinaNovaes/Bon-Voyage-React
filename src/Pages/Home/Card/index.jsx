function Card({ Foto, titulo, Legenda }) {
    return (
        <div className="Card" style={{display:"inline-block", border:"none", gap:"2rem", borderRadius:"5px", alignItems:"center", justifyContent:"center", padding:"20px", margin:"0 auto 3rem auto"}}>
            <div className="card cardbs" style={{width: "15rem", height:"15rem", boxShadow:"20px 20px 50px -20px", cursor:"pointer", transition:"1s", transform:"scale(1.1 1.1)"}}>
                <img src={Foto} className="card-img-top" alt={titulo} style={{height:"10rem", borderRadius:"5px"}}/>
                <div className="card-body">
                    <p className="card-title" style={{fontSize:"13px", textAlign:"center"}}><b>{Legenda}</b></p>
                </div>
            </div>
        </div>
    );
}

export default Card;