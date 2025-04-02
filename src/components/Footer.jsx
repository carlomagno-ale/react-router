import LogoComplete from '../assets/logoipsum-360.svg'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container mt-5">
                    <div className="row py-3 justify-content-between">
                        <div className="col-6">
                            <img className='py-4' src={LogoComplete} alt="logo" />
                        </div>
                        <div className="col-2">
                            <ul className="list-unstyled">
                                <h5>Lorem</h5>
                                <hr />
                                <li><a href="#" className="text-decoration-none">About Us</a></li>
                                <li><a href="#" className="text-decoration-none">Services</a></li>
                                <li><a href="#" className="text-decoration-none">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5>Ipsum</h5>
                            <hr />
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
                                <li><a href="#" className="text-decoration-none">Terms of Use</a></li>
                                <li><a href="#" className="text-decoration-none">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5>Ipsum</h5>
                            <hr />
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
                                <li><a href="#" className="text-decoration-none">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}