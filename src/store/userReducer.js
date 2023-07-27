const SET_AUTH = "SET_AUTH"
const LOGOUT = "LOGOUT"
const SET_VK_AUTH = 'SET_VK_AUTH'
const VK_LOGOUT = 'VK_LOGOUT'

const defaultState = {
    currentUser: {},
    isAuth: false,
    AuthType: 'none',
    //isFetching: false,
    //error: ''
}

export const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_AUTH:
            return{
                ...state,
                currentUser: action.payload,
                isAuth: true,
                AuthType: 'DataBase'
            }
        case SET_VK_AUTH:
            return{
                ...state,
                currentUser: action.payload,
                isAuth: true,
                AuthType: 'VK'
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                currentUser: {},
                isAuth: false,
                AuthType: 'none'
            }
        case VK_LOGOUT:
            console.log('vk was logout')
            localStorage.removeItem('vkToken')
            console.log(defaultState)
            return{
                isAuth: 'anaalala',
                ...state,
                currentUser: {username: 'dolbaeb'},
                AuthType: 'logout from VK none'
            }

        default:
            return state
    }
}

export const SetAuth = data => ({type: SET_AUTH, payload: data})

export const SetVkAuth = data => ({type: SET_VK_AUTH, payload: data})

export const logout = () => ({type: LOGOUT})

export const VkLogout = () => ({type: VK_LOGOUT})
