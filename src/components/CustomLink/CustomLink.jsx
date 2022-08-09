import {useContext} from "react";
import {Link,NavLink, useMatch, useLocation} from 'react-router-dom'
import './CustomLink.scss'
import useIsActive from '../../hooks/useIsActive'
import {CurrentPageContext} from "../../context/CurrentPageContext";
import {AuthContext} from "../../context/AuthContext";



const Icon = (prop) => {
	return (
		<span className="link__icon">{prop.icon}</span>
	)
}

const CustomLink = ({children, to, icon, bold, noset, ...props}) => {
	const {isActive} = useIsActive()
	
	const {currentPage, setCurrentPage} = useContext(CurrentPageContext)
	const {isLogin} = useContext(AuthContext)
	
	const onclickHandler = () => {
		console.log(to)
		setCurrentPage(to)
	}
	
	return (
		<NavLink
			to={to}
			className={isActive("link")}
			style={{fontWeight: bold ? 'bold' : ''}}
			onClick={!noset && !isLogin ? onclickHandler : null}
			>
			{icon && <Icon icon={icon}/>}
			{children}
		</NavLink>
	)
}

export {CustomLink}