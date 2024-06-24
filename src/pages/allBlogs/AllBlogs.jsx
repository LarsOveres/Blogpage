import "./AllBlogs.css"
import {data} from "../../constants/data.js";
import { useNavigate } from "react-router-dom";

function AllBlogs() {

    const navigate = useNavigate();
    const blogCount = Object.keys(data).length

    return (
        <div className="allBlogs">
            <h1>Bekijk alle {blogCount} posts op het platform</h1>
            <div className="container">
                <ul>

                    {Object.keys(data).map((id) => (
                        <li
                            className="blog-list"
                            key={id}
                            onClick={() => navigate(`/blog-details/${id}`)}
                            style={{cursor: "pointer"}}
                            >
                            <div className="blog-top">
                                <p className="title">{data[id].title}</p>
                                <p>({data[id].author})</p>
                            </div>
                            <h5>{data[id].comments} reacties</h5>
                            <h5> - </h5>
                            <h5>{data[id].shares} keer gedeeld</h5>
                        </li>
                    ))}

                </ul>
            </div>


        </div>
    )
}

export default AllBlogs
