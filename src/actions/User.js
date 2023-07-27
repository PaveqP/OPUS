import axios from "axios";
import { SetAuth, SetVkAuth } from "../store/userReducer";
import { useDispatch } from "react-redux";
import { SetVkRequest } from "../store/userReducer";
import { SetVkSuccess } from "../store/userReducer";
import { SetVkFail } from "../store/userReducer";

import {store} from '../store/index'
import { AppId, AppKey, redirect_uri, scope } from "../config";

export const registartion = async (name, surname, email, password) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/v1/enter/registration`, {
            firstname: name,
            lastname: surname,
            email: email,
            password: password
        })
        //alert("Okay")
        //setTimeout(authorization(email, password), 5000)
        //setTimeout(authentification(), 10000)
        alert('Вы успешно зарегистрированы')
    } catch (e) {
        alert("Not okay")
    }
}

export const authorization = async (email, password) => {
        console.log("called with: ", email, password)

        try {
            const response = await axios.post(`http://localhost:8080/api/v1/enter/auth`, {
                email: email,
                password: password
            })

            const token = response.data.token

            localStorage.setItem('token', token)
            console.log(token, 'okay')
            authentification()

        } catch (e) {
            alert(e)
        }
}


export const authentification = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/user`, 
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

        store.dispatch(SetAuth(response.data))
        console.log(response.data, 'USER')
        
    } catch (error) {
        alert(error, "auth")
    }
}

export const vkAuth = () => {
    let vkUser = {}

    let url = window.location.hash.split('&')
    let user = []
    
    for(let set in url){
        user = url[set].split('=')
        if(user[0] === '#access_token'){
            vkUser['access_token'] = user[1]
        } else{
            vkUser[user[0]] = user[1]
        }
    }

    localStorage.setItem('vkToken', vkUser.access_token)

    if (localStorage.getItem('vkToken')){
        store.dispatch(SetVkAuth(vkUser))
        console.log(localStorage.getItem('vkToken'), 'current token')
        console.log(vkUser, 'vkUser from now')
    }
}
