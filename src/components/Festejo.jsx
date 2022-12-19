import React from "react";

function Festejo(){
    
    const estilos={
    display: "inline-block",
    margin: "5px",
    height: "400px",
    width: "600px",
    overflow: "hidden",
    boxShadow: "0 .1rem 1rem rgba(0, 0, 0, 0.1)",
    borderRadius: "1em",
    color: "black"
    }
    
    return(
        <div >
            <h1 style={{color:"black"}}>MI PRIMER COMPONENTE DE REACT</h1>
            <div style={estilos}>
                <p> ARGENTINA CAMPEON MUNDIAL</p>
                <img src="https://acortar.link/tbq51K" alt="Argentina Campeon" />

            </div>
        </div>
    )
}

export default Festejo;