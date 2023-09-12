import axios from "axios";
import { SetAuth, SetVkAuth } from "../store/userReducer";
import { useDispatch } from "react-redux";
import { authentification } from "./User";

import {store} from '../store/index'

export const addUserWork = async (data) => {

    console.log(...data, data)
    try {
        const response = await axios.post(`http://90.156.210.196:8080/api/v1/works/upload`, 
        data,
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`, "Content-Type": "multipart/form-data"},
            //type: "multipart/form-data",
            //data: data
        },)
        authentification()
        console.log(response.data, 'add work')
    } catch (error) {
        alert(error, "post work")
    }
}
