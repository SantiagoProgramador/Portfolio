

function Footer() {
    
    return <footer className="navbar bg-body-tertiary mt-5">
                 <div className="container-fluid">
                    <div>
                        <h4 className="text-center">Contact</h4>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Send an email" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Send</button>
                        </form>
                    </div>
                    <div>
                        <h4 className="text-center">Navigate</h4>
                        <ul className="navbar-nav d-flex flex-row gap-5">
                            <li className="nav-item"><a className="nav-link" title="links" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" title="links" href="#" data-bs-toggle="modal" data-bs-target="#aboutModal">About</a></li>
                            <li className="nav-item"><a className="nav-link" title="links" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-center">Social Media</h4>
                        <ul className="navbar-nav d-flex flex-row gap-5">
                            <li className="nav-item"><a className="nav-link" href="#" title="Twitter"><img src="https://cdn-icons-png.flaticon.com/512/14417/14417709.png " width="30" height="30" alt="" title="social media"></img></a></li>
                            <li className="nav-item"><a className="nav-link" href="#" title="Instagram"><img src="   https://cdn-icons-png.flaticon.com/512/2111/2111463.png  " width="30" height="30" alt="" title="social media"></img></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://github.com/SantiagoProgramador" title="GitHub"><img src="   https://cdn-icons-png.flaticon.com/512/3291/3291695.png " width="30" height="30" alt="" title="social media"></img></a></li>
                        </ul>
                    </div>
                </div>
            </footer>;
}

export default Footer;