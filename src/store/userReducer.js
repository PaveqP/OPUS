const SET_AUTH = "SET_AUTH"
const LOGOUT = "LOGOUT"
const AVATAR = "AVATAR"
const PROJECTS = "PROJECTS"
const CURRENTPROJECT = "CURRENTPROJECT"
const ALLUSERS = "ALLUSERS"
const ANYUSER = "ANYUSER"

const defaultState = {
    currentUser: {},
    userPhoto: null,
    isAuth: false,
    projects: [],
    currentProject: {},
    allUsers: [],
    anyUser: {}
}

export const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_AUTH:
            return{
                ...state,
                currentUser: action.payload,
                isAuth: true,
            }

        case AVATAR:
            return{
                ...state,
                userPhoto: action.payload
            }

        case PROJECTS:
            return{
                ...state,
                projects: action.payload
            }
        
        case CURRENTPROJECT:
            return{
                ...state,
                currentProject: action.payload
            }

        case ALLUSERS:
            return{
                ...state,
                allUsers: action.payload
            }

        case ANYUSER:
            return{
                ...state,
                anyUser: action.payload
            }

        case LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('vkToken')
            return{
                ...state,
                currentUser: {},
                isAuth: false,
            }

        default:
            return state
    }
}

export const SetAuth = data => ({type: SET_AUTH, payload: data})

export const SetAvatar = data => ({type: AVATAR, payload: data})

export const SetProjects = data => ({type: PROJECTS, payload: data})

export const SetCurrentProject = data => ({type: CURRENTPROJECT, payload: data})

export const SetAllUsers = data => ({type: ALLUSERS, payload: data})

export const SetAnyUser = data => ({type: ANYUSER, payload: data})

export const logout = () => ({type: LOGOUT})

