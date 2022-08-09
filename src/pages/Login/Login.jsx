import {useRef, useState, useEffect, useContext} from 'react'
import {useNavigate, useLocation} from "react-router-dom";
import './Login.scss'
import {AuthContext} from "../../context/AuthContext";

function Login() {
	
	const {state} = useLocation()
	const redirect = state?.redirect
	//console.log("Login page:")
	//console.log(redirect)
	
	const LOGIN = "John"
	const PASSWORD = "pass"
	
	const formRef = useRef(null)
	const loginRef = useRef(null)
	const passwordRef = useRef(null)
	
	const {isLogin, setIsLogin, userName, setUserName} = useContext(AuthContext)
	const [isInvalid, setIsInvalid] = useState(true)
	
	const navigate = useNavigate()
	
	const navigateTo = () => {
		navigate("/loginsus", {state: {redirect: redirect}})
	}
	
	const submitHandler = (event) => {
		event.preventDefault()
		
		if (loginRef.current?.value === LOGIN && passwordRef.current?.value === PASSWORD) {
			setIsLogin(true)
			setIsInvalid(false)
			setUserName(LOGIN)
			localStorage.setItem('isLogin', 'true')
			localStorage.setItem('userName', LOGIN)
			navigateTo()
		} else {
			setIsInvalid(true)
			loginRef.current.focus()
		}
	}
	
	return (
		<div className="container">
			<div className="login">
				<form onSubmit={submitHandler} ref={formRef}>
					<div className="login__row">
						<label htmlFor="login">Login</label>
						<input
							id="login"
							type="text"
							//autoComplete="off"
							ref={loginRef}
						/>
					</div>
					<div className="login__row">
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							//autoComplete="off"
							ref={passwordRef}
						/>
					</div>
					<div className="login__row">
						<button>Sign in</button>
					</div>
					<div className="login__row">
						{isInvalid && <p className="login__error">form is invalid!</p>}
					</div>
					<div className="login__row">
						You login: {isLogin.toString()}
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
