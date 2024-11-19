import cn from "classnames";
import styles from './layout.module.css';
import HorizontalBar from "@/Components/HorizontalBar/HorizontalBar";

import React from 'react'
import Button from "@/Components/Button/Button";

const layoutSurvey = ({children} : Readonly<{children: React.ReactNode}>) => {


    return (
        <div style={{display: 'flex', flexDirection: "column", height: "100%"}}>

            <div className={cn(styles['header'])}>
                <p className={cn(styles['text'])}><span className={cn(styles['blue-text'])}>RU</span>seen</p>
            </div>
            <div>
                <p className={cn(styles['blue-text'], styles['topic'])}>Разделы:</p>
                <HorizontalBar/>
            </div>
            <h1 className={cn(styles['blue-text'])}>Вопрос {1}</h1>
            {children}
            <div className={cn(styles['buttons_container'])}>
                <Button isPrimary={true}>Следующий</Button>
                <Button>Предыдущий</Button>
            </div>
        </div>
    )
}

export default layoutSurvey;