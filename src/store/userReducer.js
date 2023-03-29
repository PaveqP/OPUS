const defaultState = {
    id: '1',
    isAuth: false,
    name: 'hello',
    profile: 'it',
    age: '20',
    gender: 'man',
    avatar: 'src//',
    descript: 'none',
}

export const userReducer = (state = defaultState, action) => {
    switch(action.type){
        default:
            return state
    }
}