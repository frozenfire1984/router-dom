import {useParams, useSearchParams} from "react-router-dom";
import useUpperCase from '../../hooks/useUpperCase'

function About() {
	
	const {upper} = useUpperCase()
	const [searchParams, setSearchParams] = useSearchParams()
	
	console.log(upper("foo bar"))
	
	return (
		<div className="container">
			<h2>About</h2>
			{searchParams.get('some')}
			
		</div>
	)
}

export default About