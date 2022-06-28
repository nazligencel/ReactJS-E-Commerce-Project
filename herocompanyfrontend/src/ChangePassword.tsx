import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { changePassword } from './Services';

function ChangePassword() {

const navigate=useNavigate()
const [oldPassword, setOldPassword] = useState('')
const [newPassword, setNewPassword] = useState('')

const [changeError, setChangeError] = useState(false) 
const [changeMessage, setChangeMessage] = useState('')


const fncSend = (evt: React.FormEvent) => {
  evt.preventDefault();

  changePassword(oldPassword,newPassword).then(res =>{
    const status = res.data.status
    if (status) {
      setChangeError(false)
     
      alert("Password Changed Successfully")

  } 
  })
  

}



  return (
    <>

<div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <h1>Customer Change Password</h1>
          <div style={{ display: changeError === true ? 'block' : 'none' }} className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> {changeMessage}
            <button type="button" className="btn-close" aria-label="Close" onClick={(evt) => setChangeError(false)}  ></button>
          </div>
          
          {/*  3 eşit tür olaraktrue değer olarakta true */}
          <form onSubmit={fncSend}>
            <div className="mt-3">
              <input onChange={(evt) => { setOldPassword(evt.target.value) }} type="email" className="form-control" placeholder="Old Password" />
            </div>
            <div className="mt-3">
              <input onChange={(evt) => { setNewPassword(evt.target.value) }} type="password" className="form-control" placeholder="New Password" />
            </div>
            <div className="mt-3">
              <input type="submit" className="btn btn-success form-control" />
            
            </div>
            <div className="mt-3">
              <a onClick={(evt) => navigate('/')} role='button' className='btn btn-danger form-control'></a>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
      {/* <h1>{email}</h1> */}


    
    </>
  )
}

export default ChangePassword
