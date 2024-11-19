import React from 'react';

import CheckBox from "@/Components/CheckBox/CheckBox";

import cn from "classnames";
import styles from "./CardSurvey1.module.css";

interface CardProps {
    title: string;
}

const CardSurvey1: React.FC<CardProps> = ({ title }) => {
    return (
        <div className={cn(styles['container'])}>
            <h2 className={cn(styles['title'])}>{title}</h2>
            <CheckBox text={'Познавательный'}/>
        </div>)
};



export default CardSurvey1;