import {Link,NavLink, useMatch, useLocation} from 'react-router-dom'
import './CustomLink.scss'
import useIsActive from '../../hooks/useIsActive'

const Icon = (prop) => {
	return (
		<span className="link__icon">{prop.icon}</span>
	)
}

const CustomLink = ({children, to, icon, bold, ...props}) => {
	const {isActive} = useIsActive()
	return (
		<NavLink
			to={to}
			className={isActive("link")}
			style={{fontWeight: bold ? 'bold' : ''}}
			>
			{icon && <Icon icon={icon}/>}
			{children}
		</NavLink>
	)
}

export {CustomLink}