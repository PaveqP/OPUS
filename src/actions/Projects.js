import axios from "axios";
import { SetAuth, SetVkAuth } from "../store/userReducer";
import { useDispatch } from "react-redux";
import { authentification, getInfoAboutUser } from "./User";
import {store} from '../store/index'
import { SetProjects } from "../store/userReducer";
import { SetCurrentProject } from "../store/userReducer";

export const addUserProject = async (data) => {
    console.log(...data, data)
    try {
        const response = await axios.post(`http://90.156.210.196:8080/api/v1/project/add`, 
        data,
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`, "Content-Type": "multipart/form-data"},
            //type: "multipart/form-data",
            //data: data
        },)
        authentification()
        console.log(response.data, 'project added')
        alert('Проект успешно добавлен!')
    } catch (error) {
        alert(error, "При добавлении проекта произошла ошибка")
    }
}

export const getUsersProjects = async () => {
    try {
        const response = await axios.get(`http://90.156.210.196:8080/api/v1/project?mode=1`,
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        })
        store.dispatch(SetProjects([]))
        authentification()
        store.dispatch(SetProjects(response.data))
        console.log(response.data, 'projects received')
        
    } catch (error) {
        alert(error, "projects not received")
    }
}

export const getProjectById = async (id) => {
    try {
        const response = await axios.get(`http://90.156.210.196:8080/api/v1/project/${id}`,
        {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        })
        store.dispatch(SetCurrentProject(response.data))
        authentification()
        console.log(response.data, 'project received')
        return
        
    } catch (error) {
        alert(error, "projects not received")
    }
}

export const getProjectAvatar = async (id) => {
        try {
            const response = await fetch(`http://90.156.210.196:8080/api/v1/project/${id}/avatar`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            
            if (response.ok) {
                const blob = await response.blob();
                const imageURL = URL.createObjectURL(blob);
                
                return imageURL.slice(5,imageURL.length)

            } else {
                console.error('Failed to fetch project image');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    // try {
    //     const response = await axios.get(`http://90.156.210.196:8080/api/v1/project/${id}/avatar`,
    //     {
    //         headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
    //     })
    //     authentification()

    //     const blob = await response.blob;
    //     const imageURL = URL.createObjectURL(blob);
    //     console.log(response.data, 'projects received')
    //     return imageURL
        
    // } catch (error) {
    //     alert(error, "projects not received")
    // }
}