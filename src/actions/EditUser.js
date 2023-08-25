import axios from "axios";
import { SetAuth, SetVkAuth } from "../store/userReducer";
import { useDispatch } from "react-redux";
import { authentification } from "./User";

import {store} from '../store/index'

export const setUserGeneralSettings = async (id, firstname, nickname, email) => {
    console.log({
        id: id,
        firstname: firstname,
        nickname: nickname,
        email: email,
        dateOfBirth: '01.05.99',
    })
    try {
        const response = await axios.post(`http://90.156.210.196/api/v1/edit`, 
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            id: id,
            firstname: firstname,
            lastname: 'any',
            nickname: nickname,
            email: email,
            //career: [],
            dateOfBirth: '01.05.99'
            //photo: null,
            //teams: [],
            //works: []
            
        },)
        //authentification()
        authentification()
        console.log(response.data, 'USER')
        
    } catch (error) {
        alert(error, "auth")
    }
}



