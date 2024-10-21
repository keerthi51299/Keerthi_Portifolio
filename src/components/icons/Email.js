import React from "react";
import { ReactComponent as Email } from '../assets/email.svg'; 

const EmailIcon = ({width, height, fill, className}) => {
    return <Email width={width} height={height} fill={fill} className={className} />
}

export default EmailIcon;
