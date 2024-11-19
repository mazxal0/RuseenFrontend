import React, {ButtonHTMLAttributes} from "react";

import cn from "classnames";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isPrimary?: boolean;
}

const Button: React.FC<ButtonProps> = ({isPrimary, ...props}) => {


    return <button className={cn(styles['button'], {[styles['primary']] : isPrimary})} {...props}>{props.children}</button>;


}

export default Button;