import axios from 'axios'
import { ICategory } from './models/ICategory'
import { ICustomerRegister } from './models/ICustomerRegister'
import { ILogin } from './models/ILogin'
import { IProduct } from './models/IProduct'


const baseURL = 'http://localhost:8092/'


const config = axios.create({
    baseURL: baseURL

})

const configJwt =()=>{
    const data=sessionStorage.getItem('data')
    const datao:ILogin=JSON.parse(data!)
 
    const token="Bearer ".concat(datao.jwt!)
    return(axios.create({
        baseURL: baseURL,
       
        headers: { 
           
                Authorization: token
           
        }}))
    
}



export const userLogin = (email: string, password: string) => { 
    
    const sendParams = { 
        username: email,
        password: password,
       
    }

   return config.post<ILogin>('login',sendParams )
    
}

export const customerRegister = (name: string, surname: string,  email: string, phone: string,password: string) => { //yazdığımız özelliği dışarda görmek için kullanırız.                     
    
    const sendParams = { 
        firstName: name,
        secondName: surname,
        email: email,
        telephone: phone,
         password: password

    }

    return config.post<ICustomerRegister>('customer/register',sendParams ) 

}    

export const forgotPassword=(email:string)=>{
 
    return config.post("forgotPassword?email="+email)
}

export const resetPassword=( verificationCode:string ,password:string)=>{
 
    const sendParams = { 
        verificationCode: verificationCode,
         password: password
    }
    return config.put("resetPassword?resettoken="+verificationCode+"&password="+password)
}

/* export const productList=()=>{
    const data=sessionStorage.getItem('data')
    const datao:ILogin=JSON.parse(data!)
 
    const token="Bearer ".concat(datao.jwt!)
   
    return config.get<IProduct>("product/list",{ headers: { 
        Authorization: token
        
    
    }})
} */
export const productList=()=>{
    
 return configJwt().get<IProduct>("product/list")
} 

export const categoryList=()=>{
    
    return configJwt().get<ICategory>("category/list")
   } 