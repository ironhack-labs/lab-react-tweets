// components/Header.js
// COMPONENTE

// 1. IMPORTACIONES
// SINÓNIMO DEL REQUIRE QUE VIMOS EN BACKEND
import React from "react"


// 2. FUNCIÓN
function User (props) {
    return ( 
        <span className="user">
           <span className="name">{props.userData.name}</span> 
           <span className="name">{props.userData.handle}</span> 
        </span>
    )
}


// 3. EXPORTACIÓN
export default User