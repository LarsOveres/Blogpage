import {useParams} from "react-router-dom"
import {data} from "../../constants/data.js"
import "./BlogDetail.css"
import formatDate from "../../helpers/format date/FormatDate.jsx";



function BlogDetail() {

    const { id } = useParams();
    const info = data[id];

    return (
        <main>
            <h1>{info.title}</h1>
            <h4>{info.subtitle}</h4>
            <p>Geschreven door {info.author} op {formatDate(data[id].created)}</p>
            <p>{info.date}</p>
            <p>{info.readTime}</p>
            <p>{info.content}</p>
            <p>{info.comments}</p>
            <p>{info.shares}</p>

            <a href="/alle-blogs">Terug naar overzichtspagina</a>
        </main>
    )
}

export default BlogDetail;
