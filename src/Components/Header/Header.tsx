import cn from "classnames";
import styles from "./Header.module.css";
import React from "react";


const Header = () => {
    return (
        <div className={cn(styles['header'])}>
            <p className={cn(styles['text'])}><span className={cn(styles['blue-text'])}>RU</span>seen</p>
        </div>
    )
}

export default Header;