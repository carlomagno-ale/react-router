import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {

    /*const [post, setPost] = useState()*/

    const { slug } = useParams()
    console.log(slug);

    // chiamata ajax del segmento
    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/posts/${slug}`)
            .then(res => res.json())
            .then(data => {

                setPost(data)

            })
            .catch(err => {
                console.log('ERROR', err);
            })

    }, [])

    return (
        <>

            <div className="text-center mt-3">
                <h1>ID prodotto: {slug}</h1>
            </div>


        </>
    );
}
