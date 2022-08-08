import {useContext} from "react";
import {NavLink} from "react-router-dom";
import useIsActive from "../../hooks/useIsActive";
import './Nav.scss'
import {AuthContext} from "../../context/AuthContext";

/*function isActive() {
	return ({isActive}) => (isActive ? 'active-link' : '')
}*/

function Nav() {
	
	const {isLogin, setIsLogin} = useContext(AuthContext)
	const {isActive} = useIsActive()
	
	return (
		<header className="header">
			<ul className="nav nav_primary">
				<li>
					<NavLink className={isActive()} to="/">index</NavLink>
				</li>
				<li>
					<NavLink className={isActive()} to="/about?some=foo">About</NavLink>
				</li>
				<li>
					<NavLink className={isActive()} to="/catalog">Catalog</NavLink>
					<ul>
						<li>
							<NavLink className={isActive()} to="/catalog/cars">Cars</NavLink>
						</li>
						<li>
							<NavLink className={isActive()} to="/catalog/trucks">Trucks</NavLink>
						</li>
					</ul>
				</li>
				<li>
					<NavLink className={isActive()} to="/news">News</NavLink>
				</li>
				{isLogin &&
				<li>
					<NavLink className={isActive()} to="/user">User</NavLink>
				</li>
				}
			</ul>
			<ul className="nav">
				{isLogin
					?
					<li>
						<span  className="like-a" onClick={() => setIsLogin(false)}>Sign Out</span>
					</li>
					:
					<li>
						<span className="like-a" onClick={() => setIsLogin(true)}>Sign in</span>
					</li>
				}
			</ul>

		</header>
	)
}

export default Nav