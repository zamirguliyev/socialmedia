import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'

const Auth = () => {
  const dispatch=useDispatch()
  const loading=useSelector((state)=>state.authReducer.loading)
  const [isSingUp,setIsSingUp]=useState(true)
  console.log(loading)
  const [data,setData]=useState({firstname:"",
  lastname:"",
  password:"",
  confirmpass:"",
  username:""})

  const [confirmPass,setConfirmPass]=useState(true)

  const handleChange =(e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(isSingUp){
      data.password === data.confirmpass ? dispatch(signUp(data)):
       setConfirmPass(false)
    }else{
      dispatch(logIn(data))
    }
  }

  const reseForm=()=>{
    setConfirmPass(true)
    setData({firstname:"",
    lastname:"",
    password:"",
    confirmpass:"",
    username:""})
  }

  return (
            
   <div className="Auth">
    <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
            <h1>ZR Media</h1>
            <h6>Explore the ideas throughout the world</h6>
        </div>
    </div>
           {/* Right side */}
           <div className="a-right">
            <form className="infoForm authForm" onSubmit={handleSubmit} >
                <h3>{isSingUp? "Sign Up":"Log In"}</h3>
                
                  {isSingUp && 
                   <div>
                   <input type="text"
                    placeholder='First Name'
                     className='infoInput' 
                     name='firstname' 
                     onChange={handleChange} />
                   <input type="text"
                    placeholder='Last Name'
                     className='infoInput'
                      name='lastname' 
                      onChange={handleChange} />
                   </div> 
                  }
               
                
                <div>
                    <input type="text"
                     className='infoInput'
                      name='username' 
                      placeholder='Usernames'
                       onChange={handleChange} />
                </div>
                <div>
                    <input type="password"
                     className='infoInput'
                      name='password' 
                      placeholder='Password'
                       onChange={handleChange} />
                    {isSingUp &&  
                    <input type="password"
                     className='infoInput' 
                     name='confirmpass' 
                     placeholder='Confirm Password' 
                     onChange={handleChange} 
                     value={data.confirmpass} />}
                   
                </div>
                <span style={{display:confirmPass? "none":"block",
                color:'red',
                fontSize:'12px',
                alignSelf:'flex-end',
                marginRight:'5px'}}>

                  * Confirm Password is not same
                </span>

                <div>
                    <span style={{fontSize:'12px',cursor:"pointer"}}
                     onClick={()=>{ setIsSingUp((prev)=>!prev);reseForm()}} >{isSingUp ? 
                      "Alredy have an account.Login!" : "Don't have an account? Sign Up"}
                    </span>
                    <button className='button infoButton'
                 type='submit'
                  disabled={loading} >
                    { loading ? "Loading..." : isSingUp ? "Sign Up" :"Log In"}
                  </button>
                </div>
              
            </form>
        </div>

   </div>
  )
}

export default Auth