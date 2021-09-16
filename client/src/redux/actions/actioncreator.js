import { LOGIN_FORM_SUBMIT } from "./constants"

{
    type: LOGIN_FORM_SUBMIT,
    payload: {username:alex, password: "123"}
}

export function authUser(form){
    return {
        type: LOGIN_FORM_SUBMIT,
        payload: form
    }
}