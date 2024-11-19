"use client";
import cn from "classnames";
import styles from "../../../Styles/Registration/Registration.module.css";
import Input from "@/Components/Input/Input";
import Link from "next/link";
import Button from "@/Components/Button/Button";
import { IUserData } from "@/Interfaces/IUserData";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

const Registration = () => {
    const router = useRouter();

    const [isWrongPassword, setWrongPassword] = useState(false);
    const [isExistUser, setIsExistUser] = useState(false);
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
        setTimeout(() => setWrongPassword(false), 1000);
        setTimeout(() => setIsExistUser(false), 1000);
        setTimeout(() => setIsError(false), 1000);
    }

    const sendUserData = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/user/registration', userData);
            console.log('data');
            if( response.data.message === 'Неверный пароль') {
                setWrongPassword(true);
                return;
            } else if ( response.data.message === 'Пользователь уже существует' ) {
                setIsExistUser(true);
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
                console.log(error);
            }
        }
    }

    return (
        <div className={cn(styles['container'])}>
            <span className={cn(styles['text-ru'])}><span className={cn(styles['text'])}>RU</span>seen</span>
            <h2 className={cn(styles['title'])}>Регистрация</h2>
            <form onSubmit={sendUserData} className={cn(styles['form'])}>
                <Input placeholder={'Имя пользователя'} name={'name'} value={userData.name} onChange={inputUserData}/>
                <Input placeholder={'Почта'} name={'email'} value={userData.email} onChange={inputUserData}/>
                <Input placeholder={'Пароль'} name={'password'} value={userData.password} onChange={inputUserData}/>
                <Input placeholder={'Повторите пароль'} name={'secondPassword'} value={userData.secondPassword} onChange={inputUserData}/>
                {isWrongPassword && <p className={cn(styles['text_wrong'])}>Неверный пароли и\или не совпадают</p>}
                {isExistUser && <p className={cn(styles['text_wrong'])}>Пользователь с такой почтой уже сущетсвуют</p>}
                {isError && <p className={cn(styles['text_wrong'])}>{errorMessage}</p>}
                <br/>
                <br/>
                <br/>
                <Button type={'submit'} isPrimary={true}>Зарегистрироваться</Button>
            </form>
            <Link href={'/authorization/login'}><Button>Войти</Button></Link>
        </div>
    )
};

export default Registration;
