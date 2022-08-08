import {useParams} from "react-router-dom";
import {NewsContext} from "../../context/NewsContext";
import {useContext} from "react";

function NewsItem() {
	const params = useParams()
	const newsArray = useContext(NewsContext)
	
	
	const details = newsArray.fakeApi.find(item => item.id === Number.parseInt(params.id)) || "news don't found"
	
	return (
		<>
			<b>details</b>:
			<br/>
			{details.more ? details.more : details}
		</>
	)
}

export default NewsItem