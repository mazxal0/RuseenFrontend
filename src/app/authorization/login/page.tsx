"use client";
import cn from "classnames";
import styles from "../../../Styles/Login/Login.module.css";
import Input from "@/Components/Input/Input";
import Link from "next/link";
import Button from "@/Components/Button/Button";
import { IUserData } from "@/Interfaces/IUserData";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

const Registration = () => {
    const router = useRouter();

    const [wrongData, setWrongData] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [userData, setUserData] = useState<IUserData>({
        name: '',
        email: '',
        password: '',
        secondPassword: ''
    });

    const inputUserData = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
        setTimeout(() => setWrongData(false), 1000);
        setTimeout(() => setIsError(false), 1000);
    }

    const sendUserData = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://backendruseensite.netlify.app/user/login', userData);
            if( response.data.message === 'Неверные пароль или почта') {
                setWrongData(true);
                return;
            }
            const token = response.data.token;
            if (token) {
                router.push('/survey');
            }
        } catch (error) {
            if (axios.isAxiosError(error)){
                if( error.response) {
                    setIsError(true);
                    setErrorMessage(error.response.data.message[0]);
                    return;
                }
            } else {
                console.log('Error');
            }
        }
    }

    return (
        <div className={cn(styles['container'])}>
            <span className={cn(styles['text-ru'])}><span className={cn(styles['text'])}>RU</span>seen</span>
            <h2 className={cn(styles['title'])}>Регистрация</h2>
            <form onSubmit={sendUserData} className={cn(styles['form'])}>
                <Input placeholder={'Почта пользователя'} name={'email'} value={userData.email} onChange={inputUserData}/>
                <Input placeholder={'Пароль'} name={'password'} value={userData.password} onChange={inputUserData}/>
                {wrongData && <p className={cn(styles['text_wrong'])}>Неверный пароли и\или почта</p>}
                {isError && <p className={cn(styles['text_wrong'])}>{errorMessage}</p>}
                <br/>
                <br/>
                <br/>
                <Button type={'submit'} isPrimary={true}>Войти</Button>
            </form>
            <Link href={'/authorization/registration'}><Button>Зарегистрироваться</Button></Link>
        </div>
    )
};

export default Registration;
