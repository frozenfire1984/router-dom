import {Outlet} from "react-router-dom";

function News() {
	return (
		<div className="container">
			<h3>News</h3>
			<Outlet/>
		</div>
	)
}

export default News