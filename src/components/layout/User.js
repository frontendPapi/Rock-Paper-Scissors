import React from "react";
import Button from "../button/Button";
import Image from "../image/Image";

const User = ({onClickHandler}) => {
  const data = [0, 1, 2];

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alingItems: 'center'}}>
      {data.map((item) => {
        return (
          <div style={{display: 'flex', flexDirection: 'column', alingItems: 'center'}} key={item} >
            <Image data={item}  />
            <Button onClickHandler={onClickHandler} data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default User;
