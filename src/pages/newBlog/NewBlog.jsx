import {useState} from "react";
import {useNavigate} from "react-router-dom";

function App() {
    // Gebruik useState om de staat van elk veld bij te houden
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!title) newErrors.title = 'Titel is verplicht';
        if (!subtitle) newErrors.subtitle = 'Subtitel is verplicht';
        if (!author) newErrors.author = 'Auteur is verplicht';
        if (!content) {
            newErrors.content = 'Bericht is verplicht';
        } else if (content.length <1) {
            newErrors.content = 'Bericht moet minimaal 300 karakters lang zijn';
        } else if (content.length > 2000) {
            newErrors.content = 'Bericht mag maximaal 2000 karakters lang zijn';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
            const readTime = Math.round(wordCount * 0.3 / 100);
            const blogPost = {
                title: title,
                subtitle: subtitle,
                content: content,
                author: author,
                created: new Date().toISOString(),
                readTime: readTime,
                comments: 0,
                shares: 0
            };

            console.log(blogPost);

            // Reset de formulier velden indien je op dezelfde pagina blijft
            setTitle('');
            setSubtitle('');
            setAuthor('');
            setContent('');
            setErrors({});

            // Navigeer naar een andere pagina
            navigate('/alle-blogs')
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Titel:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                {errors.title && <p className="error">{errors.title}</p>}
            </div>
            <div>
                <label>
                    Subtitel:
                    <input
                        type="text"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                    />
                </label>
                {errors.subtitle && <p className="error">{errors.subtitle}</p>}
            </div>
            <div>
                <label>
                    Auteur:
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </label>
                {errors.author && <p className="error">{errors.author}</p>}
            </div>
            <div>
                <label>
                    Bericht:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </label>
                {errors.content && <p className="error">{errors.content}</p>}
            </div>
            <button type="submit">Verzenden</button>
        </form>
    );
}
export default App
