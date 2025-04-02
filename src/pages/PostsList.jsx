import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const api_endpoint = 'http://localhost:3000/api/v1/posts';


export default function PostsList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(api_endpoint)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setPosts(data)
            })
    }, [])

    return (

        <>
            <main>
                <div className="container">
                    <div className="row mt-5 jus">

                        {posts.map(post => (
                            <div className="col-4 mb-4 " key={post.slug}>
                                <div className="card">
                                    <div className="card-body">
                                        <Link to={`/post/${post.slug}`}>
                                            <img src={`http://localhost:3000${post.image}`} className="card-img-top" alt={post.slug} />
                                            <h5 className="card-title fs-6 pt-3">{post.title}</h5>
                                            <span className="card-text">Scopri la ricetta</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>
            </main>

        </>
    )
}