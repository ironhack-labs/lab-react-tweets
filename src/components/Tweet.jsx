// src/components/Tweet.jsx

import React from 'react';
import ProfileImage from './ProfileImage';  // Importamos el componente ProfileImage
import User from './User';  // Importamos el componente User
import Timestamp from './Timestamp';  // Importamos el componente Timestamp
import Message from './Message';  // Importamos el componente Message
import Actions from './Actions';  // Importamos el componente Actions

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      {/* Usamos el componente ProfileImage y le pasamos la URL de la imagen */}
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* Usamos el componente User y le pasamos el nombre y el handle */}
          <User name={tweet.user.name} handle={tweet.user.handle} />

          {/* Usamos el componente Timestamp y le pasamos el timestamp */}
          <Timestamp time={tweet.timestamp} />
        </div>

        {/* Usamos el componente Message y le pasamos el mensaje */}
        <Message message={tweet.message} />

        {/* Usamos el componente Actions para renderizar los iconos */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
