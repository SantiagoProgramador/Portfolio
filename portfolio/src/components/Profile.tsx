

function Profile() {
    return <div className="mt-4 p-2 card text-center">
                <div className="card-header">
                Hi, my name is Santiago Lara
                </div>
                <div className="mt-4 card-body">
                <h5 className="mt-2 card-title">If I can imagine it, I can program it.</h5>
                <p className="card-text">I'm a back-end developer specialized in java with some front-end notions </p>
                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#aboutModal">See more about me</a>
                </div>
            </div>
}

export default Profile;