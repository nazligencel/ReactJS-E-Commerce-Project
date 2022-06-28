import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from './Services';


function Login() {



  const navigate = useNavigate()
  //useState

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false) 
  const [loginMessage, setloginMessage] = useState('')
  


  const fncSend = (evt: React.FormEvent) => {
    evt.preventDefault();

    userLogin(email, password).then(res => { 
      const status = res.data.status  
      const message = res.data.message  
    
      
      

      if (status) {

        const stData = JSON.stringify(res.data.result)
        const stJwt = JSON.stringify(res.data.jwt)
        sessionStorage.setItem("result", stData)
        sessionStorage.setItem("jwt", stJwt)
        navigate('/home')

      } else {
        
        setLoginError(true)

      }

    })
  };

  return (
    <>
      { /* bu bir yorumdur */}
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <h1>Login</h1>
          <div style={{ display: loginError === true ? 'block' : 'none' }} className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> {loginMessage}
            <button type="button" className="btn-close" aria-label="Close" onClick={(evt) => setLoginError(false)}  ></button>
          </div>
          
        
          <form onSubmit={fncSend}>
            <div className="mt-3">
              <input onChange={(evt) => { setEmail(evt.target.value) }} type="email" className="form-control" placeholder="E-Mail" />
            </div>
            <div className="mt-3">
              <input onChange={(evt) => { setPassword(evt.target.value) }} type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="mt-3">
            <button onClick={(evt) => navigate('/home')} className='btn btn-success form-control' type='submit'>Send</button>
              
            </div>
            <div className="mt-3">
              <a onClick={(evt) => navigate('/register')} role='button' className='btn btn btn-secondary form-control'>Register</a>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
      {/* <h1>{email}</h1> */}

    </>
  );
}

export default Login;