import axios from "axios";
import { SetAllUsers, SetAnyUser, SetAuth, SetVkAuth } from "../store/userReducer";
import { useDispatch } from "react-redux";
import { SetVkRequest } from "../store/userReducer";
import { SetVkSuccess } from "../store/userReducer";
import { SetVkFail } from "../store/userReducer";
import { SetAvatar } from "../store/userReducer";

import {store} from '../store/index'
import { useState } from "react";

export const registartion = async (name, surname, email, password) => {
    try {
        const response = await axios.post(`http://90.156.210.196:8080/api/v1/enter/registration`, {
            firstname: name,
            lastname: surname,
            email: email,
            password: password
        })
        alert('Вы успешно зарегистрированы')
    } catch (e) {
        alert("Not okay")
    }
}

export const authorization = async (email, password) => {
        console.log("called with: ", email, password)

        try {
            const response = await axios.post(`http://90.156.210.196:8080/api/v1/enter/auth`, {
                email: email,
                password: password
            })

            const token = response.data.token

            localStorage.setItem('token', token)
            // console.log(token, 'okay')

            if (localStorage.getItem('token')){
                authentification()
            }
            

        } catch (e) {
            alert(e)
        }
}


export const authentification = async () => {
    try {
        const response = await axios.get(`http://90.156.210.196:8080/api/v1/enter/trust`, 
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

        store.dispatch(SetAuth(response.data))
        // console.log(response.data, 'USER')
        getInfoAboutUser()
        // getUserPhoto()
        
    } catch (error) {
        alert(error, "auth")
    }
}

export const getInfoAboutUser = async () => {
    try {
        const response = await axios.get(`http://90.156.210.196:8080/api/v1/user`, 
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

        store.dispatch(SetAuth(response.data))
        // console.log(response.data, 'USER')
        
    } catch (error) {
        alert(error, "auth")
    }
}

export const getInfoAboutUserById = async (id) => {
    try {
        const response = await axios.get(`http://90.156.210.196:8080/api/v1/user/${id}`, 
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

        store.dispatch(SetAnyUser(response.data))
        authentification()
        // console.log(response.data, 'USER')
        
    } catch (error) {
        alert(error, "auth")
    }
}

export const getListOfUsers = async () => {
    try {
        const response = await axios.get(`http://90.156.210.196:8080/api/v1/users`, 
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

        store.dispatch(SetAllUsers(response.data))
        authentification()
        
    } catch (error) {
        alert(error, "auth")
    }
}

// export const getUserPhoto = async () => {

//         try {
//             const response = await fetch('http://90.156.210.196:8080/api/v1/user/photo', {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`,
//                 },
//             });

//             if (response.ok) {
//                 const blob = await response.blob();
//                 const imageURL = URL.createObjectURL(blob);
                
//                 store.dispatch(SetAvatar(imageURL))
//             } else {
//                 console.error('Failed to fetch image');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }

// }



