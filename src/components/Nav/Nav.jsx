import {useContext} from "react";
import {NavLink} from "react-router-dom";
import {CustomLink} from "../CustomLink/CustomLink";
import useIsActive from "../../hooks/useIsActive";
import './Nav.scss'
import {AuthContext} from "../../context/AuthContext";
import { FaHome, FaInfoCircle, FaListUl, FaRegNewspaper, FaUserAlt } from "react-icons/fa";



function Nav() {
	
	const {isLogin, setIsLogin} = useContext(AuthContext)
	const {isActive} = useIsActive()
	
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
				{isLogin &&
				<li>
					<CustomLink to="/user" icon={<FaUserAlt />}>User</CustomLink>
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