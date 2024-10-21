import React from "react";
import { ReactComponent as Share } from '../assets/share.svg'; 

const ShareIcon = ({width, height, fill, className}) => {
    return <Share width={width} stroke={fill} height={height} fill={fill} className={className} />
}

export default ShareIcon;
