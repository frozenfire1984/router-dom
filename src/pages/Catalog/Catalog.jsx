import {Outlet} from "react-router-dom";

function Catalog() {
	return (
		<div className="container">
			<h2>Catalog</h2>
			<Outlet/>
		</div>
	)
}

export default Catalog