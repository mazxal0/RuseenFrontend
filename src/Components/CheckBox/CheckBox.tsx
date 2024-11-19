import cn from "classnames";
import styles from "./CheckBox.module.css";

const CheckBox = ({text} : {text: string}) => {
    return (
        <div className={cn(styles['container'])}>
            <input className={cn(styles['checkbox'])} type={'checkbox'} />
            <h4 className={styles['text']}>{text}</h4>
        </div>
    )
};


export default CheckBox;