import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import NewBlog from "./pages/newBlog/NewBlog.jsx";
import AllBlogs from "./pages/allBlogs/AllBlogs.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import BlogDetail from "./pages/detailBlog/BlogDetail.jsx";

function App() {
    return (
        <>
        <nav>

            <div className="nav-container">

                <Link to="/">
                    <img className="nav-img" src="../src/assets/logo-medium.png" alt="Logo"/>
                </Link>

                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/alle-blogs">Alle blogs</Link></li>
                    <li className="li-new-blog"><Link to="/nieuwe-blog"><span
                        className="new-blog">Nieuwe blog</span></Link></li>
                </ul>

            </div>

        </nav>


        <Routes>

            <Route path="/" element={<HomePage/>}/>
            <Route path="/nieuwe-blog" element={<NewBlog/>}/>
            <Route path="/alle-blogs" element={<AllBlogs/>}/>
            <Route path="/blog-details/:id" element={<BlogDetail/>}/>
            <Route path="*" element={<NotFound/>}/>

        </Routes>

</>
)
}

export default App
