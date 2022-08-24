import React from "react";

const Button = ({onClickHandler, data, text=null}) => {
    return ( 
        <button className="btn-main" onClick={()=>onClickHandler(data)}>{text?text: 'Select'}</button>
     );
}
 
export default Button;