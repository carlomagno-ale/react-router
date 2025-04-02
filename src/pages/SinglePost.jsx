import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {

    const [post, setPost] = useState()
    //console.log(post.image)

    const { slug } = useParams()
    //console.log(slug);

    // chiamata ajax del segmento
    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/posts/${slug}`)
            .then(res => res.json())
            .then(data => {

                setPost(data)
                //console.log(data)

            })
            .catch(err => {
                console.log('ERROR', err);
            })

    }, [])

    return (
        <>
            <main>
                <div className="container">
                    <div className="text-center my-3">
                        <h1>{post.title}</h1>


                        <img src={`http://localhost:3000${post.image}`} alt={post.slug} />

                    </div>

                    <div className="mt-3">
                        <p>{post.content}</p>
                    </div>
                </div>
            </main>
        </>
    );
}
