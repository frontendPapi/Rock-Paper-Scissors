import React from "react";

const Result = ({renderResult}) => {
    return ( 
        <div>
            {renderResult()}
        </div>
     );
}
 
export default Result;