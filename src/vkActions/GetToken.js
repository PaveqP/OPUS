export const getToken = () => {
    const currentURL = window.location.href
    if (!currentURL.includes('#')){
        return 'no token'
    }
    const allParams = currentURL.split('#')[1]
    const setOfParams = allParams.split('&')
    const checkToken = setOfParams[0].split('=')
    if (checkToken[0] !== 'access_token'){
        throw new Error('STATUS: FAILED - No access token')
        return 'no access token'
    } else{
        const VKToken = checkToken[1]
        const checkExpiresIn = setOfParams[1].split('=')
        const checkUserId = setOfParams[2].split('=')
        console.log("STATUS: OKAY")
        return {'VK_token': VKToken, "expires_in": checkExpiresIn[1], 'user_id': checkUserId[1]}
    }
}