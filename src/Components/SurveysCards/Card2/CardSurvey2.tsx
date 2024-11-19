import React from 'react';

import cn from "classnames";
import styles from "./CardSurvey2.module.css";
import Input from "@/Components/Input/Input";

interface CardProps {
    title: string;
}

const CardSurvey2: React.FC<CardProps> = ({ title }) => {
    return (
        <div className={cn(styles['container'])}>
            <h2 className={cn(styles['title'])}>{title}</h2>
            <div className={cn(styles['input_container'])}>
                <p className={cn(styles['text'])}>Туда</p>
                <Input
                    type={'date'}
                    min={new Date().toISOString().split('T')[0]}
                />
            </div>
            <div className={cn(styles['input_container'])}>
                <p className={cn(styles['text'])}>Обратно</p>
                <Input
                    type={'date'}
                    min={new Date().toISOString().split('T')[0]}
                />
            </div>
        </div>)
};


export default CardSurvey2;