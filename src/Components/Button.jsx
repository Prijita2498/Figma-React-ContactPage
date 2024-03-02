import React from "react";
import './Button.css'

function Button({text, icon, isOutline}) {
  return (
    <div>
      <button className={isOutline? "outline-button" : "primary-button"}>
        {icon}
        {text}
      </button>
    </div>
  );
}

export default Button;
