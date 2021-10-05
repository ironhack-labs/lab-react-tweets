// components/Header.js
// COMPONENTE

// 1. IMPORTACIONES
// SINÓNIMO DEL REQUIRE QUE VIMOS EN BACKEND
import React from "react"


// 2. FUNCIÓN
function Actions (props) {
    return ( 
        <div className="actions">
        {/* Font Awesome icons */}
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div>
    )
}


// 3. EXPORTACIÓN
export default Actions