import axios from "axios";
import { SetAuth, SetVkAuth } from "../store/userReducer";
import { useDispatch } from "react-redux";
import { authentification, getInfoAboutUser } from "./User";
import {store} from '../store/index'


export const setUserGeneralSettings = async (id, firstname, nickname, email, user) => {

    console.log({
        id: id,
        firstname: firstname,
        nickname: nickname,
        email: email,
        dateOfBirth: '01.05.99',
    })

    try {
        const response = await axios.post(`http://90.156.210.196:8080/api/v1/edit`, 
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            about: user.about, 
            age: user.age, 
            career: user.career, 
            cvPath: user.cvPath, 
            dateOfBirth: user.dateOfBirth, 
            email: email, 
            firstname: firstname, 
            id: id, 
            isVisible: null,
            lastname: user.lastname, 
            links: user.links, 
            nickname: nickname, 
            phone: user.phone,
            photo: user.photo, 
            projects: user.projects,
            skills: user.skills,
            works: user.works,
            
        },)
        authentification()
        console.log(response.data, 'USER')
        alert('Информация обновлена')
        
    } catch (error) {
        alert(error, "auth")
    }
}

export const setUserAvatar = async (data) => {
    console.log(...data, data)
    try {
        const response = await axios.post(`http://90.156.210.196:8080/api/v1/edit/updatePhoto`, 
        data,
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`, "Content-Type": "multipart/form-data"},
            //type: "multipart/form-data",
            //data: data
        },)
        authentification()
        console.log(response.data, 'avatar changed')
        
    } catch (error) {
        alert(error, "auth")
    }
}

export const deleteUserAvatar = async () => {
    try {
        const response = await axios.put(`http://90.156.210.196:8080/api/v1/edit/deletePhoto`, 
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        },)
        authentification()
        console.log(response.data, 'avatar deleted')
        
    } catch (error) {
        alert(error, "auth")
    }
}

export const setUserProfileSettings = async (specialize, about, user) => {
    console.log({
        specialize: specialize,
        about: about
    })
    try {
        const response = await axios.post(`http://90.156.210.196:8080/api/v1/edit`, 
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            about: about,
            age: user.age,
            career: user.career,
            cvPath: user.cvPath,
            dateOfBirth: user.dateOfBirth,
            email: user.email,
            firstname: user.firstname,
            id: user.id,
            lastname: user.lastname,
            links: user.links,
            nickname: user.nickname,
            phone: user.phone,
            photo: user.photo,
            projects: user.projects,
            skills: specialize,
            works: user.works,
        },)
        //authentification()
        authentification()
        console.log(response.data, 'USER')
        alert('Информация обновлена')
        
    } catch (error) {
        alert(error, "auth")
    }
}

export const setUserPersonalSettings = async (age, phone, user) => {
    console.log({
        age: age,
        phone: phone
    })
    try {
        const response = await axios.post(`http://90.156.210.196:8080/api/v1/edit`, 
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            about: user.about,
            age: age,
            career: user.career,
            cvPath: user.cvPath,
            dateOfBirth: user.dateOfBirth,
            email: user.email,
            firstname: user.firstname,
            id: user.id,
            lastname: user.lastname,
            links: user.links,
            nickname: user.nickname,
            phone: phone,
            photo: user.photo,
            projects: user.projects,
            skills: user.skills,
            works: user.works,
        },)
        //authentification()
        authentification()
        console.log(response.data, 'USER')
        alert('Информация обновлена')
        
    } catch (error) {
        alert(error, "auth")
    }
}


