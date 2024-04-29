

function About() {
    
    return <div className="modal fade" id="aboutModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">About Me</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                My name is Santiago Lara Zapata, and I am a 19-year-old back-end developer with a basic understanding of front-end development. My main area of expertise is Java programming. I studied software development at a company called Riwi Desarrollo de Software, and I have one year of experience in development.
                               
                            </p>
                            <p>
                                Currently, I live in Medellín, Colombia, and I am almost fluent in English. What I enjoy most about programming is automating and streamlining processes. This passion drives my approach to coding and helps me create efficient and effective solutions for the projects I work on.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
}

export default About;