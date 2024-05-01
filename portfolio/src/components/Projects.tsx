
function Projects() {
    const styles = {
        width: '18rem'
    }

    return <div className="mt-3">
            <h2>Projects</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div className="col">
                    <div className="card" style={styles}>
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                         <h5 className="card-title">CuidaMatch</h5>
                            <p className="card-text">CuidaMatch is a website made with vanilla JavaScript, HTML and CSS, on this website you can find a caregiver for your loved ones and also if you are a caregiver you can apply for this job through this page.</p>
                            <a href="#" className="btn btn-primary">See the project</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={styles}>
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                         <h5 className="card-title">News web Page</h5>
                            <p className="card-text">A web page made with JSON server, JavaScript and Boostrap to create, delete, show and update news.</p>
                            <a href="#" className="btn btn-primary">See the project</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={styles}>
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                         <h5 className="card-title">Managment System</h5>
                            <p className="card-text">A basic CRUD made with thymeleaf and Java - spring to manage a given entity, in this case a Coder.</p>
                            <a href="#" className="btn btn-primary">See the project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
}

export default Projects;
