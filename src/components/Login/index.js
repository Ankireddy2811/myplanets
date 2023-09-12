import {Component} from 'react'

import {Link} from "react-router-dom"

import Cookies from "js-cookie"

import './index.css'

class Login extends Component {
  state = {username:"",password:"",errorMsg:""}

  onChangeName = (event)=>{
    this.setState({username:event.target.value})
  }

  onChangePassword = (event)=>{
    this.setState({password:event.target.value})
  }

  onRequestSuccess = (jwtToken)=>{
    // const {history} = this.props
    Cookies.set("jwtToken",jwtToken,{expires:100})
    
  }

  onSubmitEventOccurs = async(event)=>{
   event.preventDefault()
   const {username,password} = this.state
   const userDetails={username,password}
   const options = {
    method:"POST",
    body:JSON.stringify(userDetails)
   }
   const response = await fetch("https://apis.ccbp.in/login",options)
   // console.log(response)
   const data = await response.json()
   console.log(data)
   if (response.ok === true){
   
    this.onRequestSuccess(data.jwt_token)
   }
   else{
    this.onRequestFailure(data)
   }
  }


  render() {
    return (
      <div className="login-bg-container">
        <form className="form-container" onSubmit={this.onSubmitEventOccurs}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HWjuApGRrqDUHEA13FuJudEprekpIhnn4b5ZwsaPBg&s"
            alt="logo"
            className="logo-image"
          />
          <label htmlFor="label1" className="label-ele">
            USERNAME
          </label>
          <input
            type="text"
            id="label1"
            className="input-ele1"
            placeholder="Username"
            onChange={this.onChangeName}
          />
          <label htmlFor="label2" className="label-ele">
            PASSWORD
          </label>
          <input
            type="password"
            id="label2"
            className="input-ele1"
            placeholder="Password"
            onChange={this.onChangePassword}
          />
          <div className="checkbox-open-container">
            <input type="checkbox" id="checkbox1" className="checkbox-Ele" />
            <label htmlFor="checkbox1" className="label-ele">
              Show Password
            </label>
          </div>
          <p className='note'>username:rahul & password:rahul@2021</p>
          <Link to="/home">
          <button type="submit" className='submit-button'>Login</button>
          </Link>
        </form>
      </div>
    )
  }
}


export default Login
