import {useSearchParams} from "react-router-dom";

function User() {
	const [searchParams, setSearchParams] = useSearchParams()
	
	const handleClick = () => {
		setSearchParams({myParams: new Date().getTime()})
	}
	
	return (
		<div className="container">
			<h3>User</h3>
			<button onClick={handleClick}>set search params</button>
		</div>
	)
}

export default User