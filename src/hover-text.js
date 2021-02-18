import React, { useState } from'react';
import './hover.css';

function MouseText() {
    const [isShown, setIsShown] = useState(false);

  return (
      <div>
    <div className="text" 
     onMouseOver={() => setIsShown(true)}
    onMouseOut={() => setIsShown(false)}>
        <h1>Put your mouse (h)over here!!</h1>

        
    </div>
    {isShown && <div><h1>Got The Joke?</h1></div>}
    </div>
  );
}

export default MouseText;
