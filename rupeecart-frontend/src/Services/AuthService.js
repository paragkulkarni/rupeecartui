import axios from 'axios';
import {api_rupeekart_auth} from '../environment/environemnt-dev'



export function loginAuthService(username,password){
    console.log(username,password)
    return axios.post(
         `${api_rupeekart_auth}/users/login`, 
        {
            email: `${username}`, 
            password: `${password}`
        },
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": 'application/x-www-form-urlencoded',
            }
        }
    )
}

export function regAuthService(data){
    console.log(data)
    return axios.post(
        `${api_rupeekart_auth}/users/register`,
        {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password
        },
        {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    );
}


