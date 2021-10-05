// components/Header.js
// COMPONENTE

// 1. IMPORTACIONES
// SINÓNIMO DEL REQUIRE QUE VIMOS EN BACKEND
import React from "react"


// 2. FUNCIÓN
function Timestamp (props) {
    return ( 
        <span className="timestamp">{props.timestamp}</span>
    )
}


// 3. EXPORTACIÓN
export default Timestamp