import {useParams, useNavigate, useLocation} from "react-router-dom";
import {NewsContext} from "../../context/NewsContext";
import {useContext} from "react";

function NewsItem() {
	const params = useParams()
	const newsArray = useContext(NewsContext)
	const navigate = useNavigate()
	
	const goBack = () => {
	  navigate(-1)
	}
	
	const {pathname} = useLocation()
	
	const goHome = () => {
		navigate('/', {replace: true, state: {prevPage: pathname}})
	}
	const details = newsArray.fakeApi.find(item => item.id === Number.parseInt(params.id)) || "news don't found"
	
	return (
		<>
			<button onClick={goHome}>Go home</button>
			<button onClick={goBack}>Back</button>
			<br />
			<b>details</b>:
			<br/>
			{details.more ? details.more : details}
		</>
	)
}

export default NewsItem