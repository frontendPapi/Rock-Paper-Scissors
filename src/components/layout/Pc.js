import React from "react";
import Image from "../image/Image";


const Pc = ({pcSelect}) => {
    if(pcSelect.pc === null){
        return null;
    }
    return ( 
        <div>
            <Image data={pcSelect.pc} />
        </div>
     );
}
 
export default Pc;