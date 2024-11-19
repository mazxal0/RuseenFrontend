"use client";
import CardSurvey1 from "@/Components/SurveysCards/Card1/CardSurvey1";

import {observer} from "mobx-react";
import surveyStore from "@/Store/SurveyStore";
import CardSurvey2 from "@/Components/SurveysCards/Card2/CardSurvey2";


const Survey = observer(() => {

    const page = surveyStore.getPage();

    return (
        <>
            {
                page === 1 ? <CardSurvey1 title={'Выберите вид путешествия'}/> :
                page === 2 ? <CardSurvey2 title={'Выберите дату поездки'}/> :

                null
            }
        </>
    )
})

export default Survey;