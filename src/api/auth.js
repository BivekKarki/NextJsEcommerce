import config from '@/config/config.js';
import axios from "axios";

async function login(email, password){
    const response = await axios.post(`
        ${config.apiUrl}/api/auth/login`, {email, password}
    );

    return response.data;
}

async function signUp({name, email, password, confirmPassword}) {
    const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
        name,
        email,
        password,
        confirmPassword,
    })
    return response.data;
}


export {login, signUp};