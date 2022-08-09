import {useContext, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {CurrentPageContext} from "../../context/CurrentPageContext";
import {AuthContext} from "../../context/AuthContext";
import './Login.scss'

function LoginSus() {
	const {isLogin, userName} = useContext(AuthContext)
	const {setCurrentPage} = useContext(CurrentPageContext)
	const navigate = useNavigate()
	
	const {state} = useLocation()
	const redirect = state.redirect
	//console.log("LoginSus Page:")
	//console.log(redirect)
	
	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentPage("/")
			navigate(redirect ? redirect : "/")
		},3000)
		
		return () => {
			clearTimeout(timer)
		}
	},[])
	
	return (
		<div className="container">
			<div className="login login_sus-msg">
				<p>{userName.charAt(0).toUpperCase()}{userName.slice(1)}, you logged is successfully!</p>
			</div>
		</div>
	)
}

export default LoginSus