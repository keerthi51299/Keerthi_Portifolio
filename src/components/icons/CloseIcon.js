import React from "react";
import { ReactComponent as Close } from '../assets/close.svg'; 

const CloseIcon = ({width, height, fill, className}) => {
    return <Close width={width} height={height} fill={fill} className={className} />
}

export default CloseIcon;
