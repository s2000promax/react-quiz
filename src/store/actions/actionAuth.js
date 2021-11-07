import axios from 'axios'
import { AUTH_LOGOUT, AUTH_SUCCESS } from './actionTypes'

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }

}
//==========================================================
export function autoLogOut(time) {
return dispatch => {
    setTimeout( ()=> {dispatch(logout())}, time * 1000 )
}
}

export function logout() {
    localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('expirattionDate')
    return {
        type: AUTH_LOGOUT
    }
}
//===========================================================

export function auth(email, password, isLogin) {
 return async dispatch => {
     const authData = {
         email, password, 
         returnSecureToken: true
     }

     let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBchi1xYz-_hvZcOLRB9h4d2rknRCgzPvQ'

     if (isLogin) {
         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBchi1xYz-_hvZcOLRB9h4d2rknRCgzPvQ'
     }

      const response = await axios.post(url, authData)
      const data = response.data

      const expirationDate = new Date( new Date().getTime() + data.expiresIn * 1000)

      localStorage.setItem('token', data.idToken)
      localStorage.setItem('userId', data.localId)
      localStorage.setItem('expirattionDate', expirationDate)

      dispatch(authSuccess(data.idToken))
      dispatch(autoLogOut(data.expiresIn))
             
 }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirattionDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(autoLogOut((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}