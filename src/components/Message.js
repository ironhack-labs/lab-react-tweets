// components/Header.js
// COMPONENTE

// 1. IMPORTACIONES
// SINÓNIMO DEL REQUIRE QUE VIMOS EN BACKEND
import React from "react"


// 2. FUNCIÓN
function Message (props) {
    return ( 
        <p className="message">
        {props.message}
        </p>
    )
}


// 3. EXPORTACIÓN
export default Message