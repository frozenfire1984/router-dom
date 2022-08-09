import {useContext} from "react";
import {CustomLink} from "../CustomLink/CustomLink";
import './Nav.scss'
import {AuthContext} from "../../context/AuthContext";
import { FaHome, FaInfoCircle, FaListUl, FaRegNewspaper, FaUserAlt, FaSignInAlt } from "react-icons/fa";

function Nav() {
	const {isLogin, setIsLogin, userName, setUserName} = useContext(AuthContext)
	
	const logoutHandler = () => {
	  setIsLogin(false)
		setUserName("")
		localStorage.removeItem('isLogin')
		localStorage.removeItem('userName')
	}
	
	return (
		<header className="header">
			<ul className="nav nav_primary">
				<li>
					<CustomLink to="/" icon={<FaHome />} bold>index</CustomLink>
				</li>
				<li>
					<CustomLink to="/about?some=foo" icon={<FaInfoCircle />}>About</CustomLink>
				</li>
				<li>
					<CustomLink to="/catalog" icon={<FaListUl />}>Catalog</CustomLink>
					<ul>
						<li>
							<CustomLink to="/catalog/cars">Cars</CustomLink>
						</li>
						<li>
							<CustomLink to="/catalog/trucks">Trucks</CustomLink>
						</li>
					</ul>
				</li>
				<li>
					<CustomLink to="/news" icon={<FaRegNewspaper />}>News</CustomLink>
				</li>
				{/*{isLogin &&*/}
				<li>
					<CustomLink to="/user" icon={<FaUserAlt />} noset>User</CustomLink>
				</li>
				{/*}*/}
			</ul>
			<ul className="nav">
				{isLogin
					?
					<li>
						<span className="like-a" onClick={logoutHandler}>Sign Out</span>
					</li>
					:
					<li>
						<CustomLink to="/login" icon={<FaSignInAlt />}>Sign in</CustomLink>
					</li>
				}
			</ul>
			{isLogin && <div className="header__username">{userName}</div>}
		</header>
	)
}

export default Nav