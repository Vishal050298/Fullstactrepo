import { AUTH } from '../constants'
import api from '../Services/api'


export const SignUp = (user, navigate) => async dispatch => {
    try{
        const {data} = await api.signUp(user)

        dispatch({type:AUTH, data})
        navigate('/profile')
    }
    catch(error){
        throw error;
    }
}

export const LogIn = (user, navigate) => async dispatch => {
    try{
        const {data} = await api.signIn(user)
        dispatch({type:AUTH, data})
        navigate('/profile')
    }
    catch(error){
        throw error;
    }
}