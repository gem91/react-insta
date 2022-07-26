import React from "react";

const Avatar = ({ width = 40, height = 40 }) => {
   return <img src={`http://placeimg.com/${width}/${height}/any`} alt="" />;
};

export default Avatar;
