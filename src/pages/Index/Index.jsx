import {useLocation} from "react-router-dom";

function Index() {
	const {state} = useLocation()
	
	return (
		<div className="container">
			<h2>Index</h2>
			
			{state?.prevPage && <p>You come from page: <em>{state.prevPage}</em></p>}
		</div>
	)
}

export default Index