import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userRegister } from './Services';


function Register() {

 
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registerError, setRegisterError] = useState(false) 
    const [registerMessage, setRegisterMessage] = useState('')
    

    const fncSend = (evt: React.FormEvent) => {
        evt.preventDefault();

        userRegister(name, surname, phone, email, password).then(res => {

            const status = res.data.status 
            const message = res.data.message          
            const result = res.data.result           
            setRegisterMessage(message)
            if (status) {
                
                navigate('/')
            } else {
                // alert(mesaj)
                setRegisterError(true)
            }



        })


        console.log("fncSend ");

    };




    


    return (
        <>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h1>Customer Register</h1>
                    <div style={{ display: registerError === true ? 'block' : 'none' }} className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> {registerMessage}
                        <button type="button" className="btn-close" aria-label="Close" onClick={(evt) => setRegisterError(false)}  ></button>
                    </div>
                    <form onSubmit={fncSend} >
                        <div className="mt-3">
                            <input onChange={(evt) => { setName(evt.target.value) }} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="mt-3">
                            <input onChange={(evt) => { setSurname(evt.target.value) }} type="text" className="form-control" placeholder="Surname" />
                        </div>
                        <div className="mt-3">
                            <input onChange={(evt) => { setPhone(evt.target.value) }} type="tel" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="mt-3">
                            <input onChange={(evt) => { setEmail(evt.target.value) }} type="email" className="form-control" placeholder="e-Mail" />
                        </div>
                        <div className="mt-3">
                            <input onChange={(evt) => { setPassword(evt.target.value) }} type="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className='mt-3'>
                            <a onClick={(evt) => navigate("/")} role="button" className='btn btn-dark'>Back</a>
                            <button className='btn btn-secondary' type='submit'>Send</button>

                        </div>

                    </form>

                </div>
                <div className="col-sm-4"></div>
            </div>


        </>
    )
}

export default Register

