import React from "react";

function CardText({ titulo }) {
    return (
        <div className="CardText" >
            <div className="texto" style={{width:"98%", fontSize:"14px", backgroundColor:"bisque", padding:"5px", borderRadius:"15px", textAlign:"center", boxShadow:"20px 20px 50px -25px"}}>
                <h3 style={{margin:"15px"}}>{titulo}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quisquam quidem architecto deleniti modi, ea corporis! Ducimus fugiat facere distinctio excepturi explicabo, tenetur eveniet deserunt laudantium rerum neque porro impedit!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aperiam cupiditate placeat animi ab debitis cum, tempora omnis ducimus rem harum eligendi odio quaerat voluptates! Voluptas nobis veritatis suscipit fugiat.</p>
            </div>
        </div>
    );
}
export default CardText;