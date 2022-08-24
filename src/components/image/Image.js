import React from "react";
import Rock from "../../assets/rock.webp"
import Paper from "../../assets/paper.webp"
import Scissors from "../../assets/scissors.webp"


const Image = ({data}) => {
    return (  
       <img style={{height: "225px", width: "225px"}} src={data === 0 ? Rock : data === 1 ? Paper : Scissors} alt="images">

       </img>
    );
}
 
export default Image;