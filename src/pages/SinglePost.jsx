import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePost() {

    const [post, setPost] = useState()

    const { slug } = useParams()

    const navigate = useNavigate();

    // chiamata ajax del segmento
    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/posts/${slug}`)
            .then(res => res.json())
            .then(data => {

                setPost(data)
                console.log(data)

            })
            .catch(err => {
                console.log('ERROR', err);
            })

    }, [])

    console.log(post)

    return (
        <>
            <main>
                <div className="container text-center">

                    {/*!post ? ('Caricamento')
                    : (
                        */}

                    {post && (
                        <div>
                            <h1 className="my-3">{post.title}</h1>
                            <img src={`http://localhost:3000${post.image}`} alt={post.slug} />
                            <div className="mt-3">
                                <p className="my-4">{post.content}</p>
                            </div>
                        </div>
                    )}

                    <button className="mt-2" onClick={() => navigate(-1)}>
                        Torna alla pagina precedente
                    </button>

                </div>
            </main>
        </>
    );
}
