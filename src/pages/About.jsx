export default function About() {

    return (
        <>
            <main>
                <div className="container">

                    <section className="row align-items-center mt-5">
                        <div className="col-md-6 text-start">
                            <h1>About Us</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam in nihil cupiditate quo? Cum molestiae dolores ad libero id fugiat possimus fugit, ipsum, eum iure, maiores eius odit beatae autem.
                            </p>
                            <p>
                                Our mission is Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil?
                            </p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img
                                src="https://picsum.photos/400/300"
                                alt="About Us"
                                className="img-fluid"
                            />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}