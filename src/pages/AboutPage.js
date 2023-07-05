import photo from '../steven-small.jpg';

function AboutPage() {
    return (
        <main>
            <h2>About Me</h2>
            <div>
                <img
                    src={photo}
                    alt='A photo of Steven'
                    className='float-start mb-3 me-3 rounded-circle'
                />
                <p>I am a graduate of the software engineering program at University of Waterloo, where I worked on the full software development life cycle. I am a dedicated worker who likes to take ownership and make sure that a job isn't just done--it's done right. I enjoy both learning new skills and refining old ones, and am always looking for ways to grow.</p>
            </div>
        </main>
    )
}

export default AboutPage;