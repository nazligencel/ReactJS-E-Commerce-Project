import axios from 'axios'
import { ILogin } from './models/ILogin'


const baseURL = 'http://localhost:8080/'

const config = axios.create({
    baseURL: baseURL
    // params: {
    //     ref: ref  
    // },
    // headers: { Authorization: `Bearer`+ }
})


export const userLogin = (email: string, password: string) => { 


    
    const sendParams = { 
        username: email,
        password: password,
       
    }

    
    return config.post<ILogin>('login',sendParams )
    

}

export const userRegister = (name: string, surname: string, phone: string, email: string, password: string) => { 
    


    
    const sendParams = { 
        customerName: name,
        customerSurname: surname,
        phone: phone,
        email: email,
        password: password

    }

   
    return config.post('customer/register',sendParams ) 
 

}   
export const changePassword = (oldPassword:string, newPassword:string) => { 

    const sendParams = {
        oldPassword: oldPassword,
        newPassword: newPassword
       
    }

    
    return config.put('customer/changePassword',sendParams )
    

}   
