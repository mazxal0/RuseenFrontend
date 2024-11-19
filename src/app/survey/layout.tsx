"use client";

import React from 'react'

import cn from "classnames";
import styles from './layout.module.css';

import HorizontalBar from "@/Components/HorizontalBar/HorizontalBar";
import Button from "@/Components/Button/Button";
import Header from "@/Components/Header/Header";

import {observer} from "mobx-react";
import surveyStore from "@/Store/SurveyStore";


const layoutSurvey = observer(({children} : Readonly<{children: React.ReactNode}>) => {

    const page = surveyStore.getPage();


    const onSwapNextPage: React.MouseEventHandler<HTMLButtonElement> = () => {
        surveyStore.setPage(Math.min(6, surveyStore.getPage() + 1));
    }

    const onSwapBackPage: React.MouseEventHandler<HTMLButtonElement> = () => {
        surveyStore.setPage(Math.max(1, surveyStore.getPage() - 1));
    }

    return (
        <div style={{display: 'flex', flexDirection: "column", height: "100%"}}>

            <Header />
            <div>
                <p className={cn(styles['blue-text'], styles['topic'])}>Разделы:</p>
                <HorizontalBar/>
            </div>
            <h1 className={cn(styles['blue-text'], styles['page_title'])}>Вопрос {page}</h1>
            {children}
            <div className={cn(styles['buttons_container'])}>
                <Button onClick={onSwapBackPage}>Предыдущий</Button>
                <Button onClick={onSwapNextPage} isPrimary={true}>Следующий</Button>
            </div>
        </div>
    )
});

export default layoutSurvey;