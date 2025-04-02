import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePost() {

    const [post, setPost] = useState()
    //console.log(post.image)

    const { slug } = useParams()
    //console.log(slug);

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

    return (
        <>
            <main>
                <div className="container">

                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-center my-3">{slug}</h1>

                        <button onClick={() => navigate(-1)}>
                            Torna alla pagina precedente
                        </button>
                    </div>
                </div>
            </main>

            {/*

                <div className="container text-center">
                    <h1 className="my-3">{post.title}</h1>
                    <img src={`http://localhost:3000${post.image}`} alt={post.slug} />
                    <div className="mt-3">
                        <p className="my-3">{post.content}</p>
                    </div>
                </div>

            */}

        </>
    );
}
