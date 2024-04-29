
function Header() {
    
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                        <div className="navbar-brand">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png " width="40" height="50" alt="" title="" className="navbar-brand"></img>
                        <a className="text-decoration-none text-body"  href="#">Santiago</a>
                        <img  src="https://cdn-icons-png.flaticon.com/512/5253/5253968.png" alt="Verified icon" width="20" height="20"></img>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#aboutModal">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>;
}


export default Header;