// components/Header.js
// COMPONENTE

// 1. IMPORTACIONES
// SINÓNIMO DEL REQUIRE QUE VIMOS EN BACKEND
import React from "react"


// 2. FUNCIÓN
function ProfileImage (props) {
    return ( 
            <img
        src={props.image}
        className="profile"
        alt="profile"
      />
    )
}


// 3. EXPORTACIÓN
export default ProfileImage