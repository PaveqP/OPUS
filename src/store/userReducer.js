const SET_AUTH = "SET_AUTH"
const LOGOUT = "LOGOUT"


const defaultState = {
    currentUser: {},
    isAuth: false,

}

export const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_AUTH:
            return{
                ...state,
                currentUser: action.payload,
                isAuth: true,
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

export const logout = () => ({type: LOGOUT})

