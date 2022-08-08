import {useContext} from "react";
import {NewsContext} from '../../context/NewsContext'
import {Link} from "react-router-dom";

function NewsList() {
	const news = useContext(NewsContext)
	
	return (
		<ul>
			{news.fakeApi.map((item, index) => (
				<li key={index}>
					<Link to={`/news/${item.id}`}>{item.title}</Link>
				</li>
			))}
			<li>
				<Link to="/news/100">bad news</Link>
			</li>
		</ul>
	)
}

export default NewsList