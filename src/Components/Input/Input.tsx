import cn from "classnames";
import styles from './Input.module.css';
import React, {InputHTMLAttributes} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({...props}) => {
    return <input {...props} className={cn(styles['input'])}/>
}

export default Input;