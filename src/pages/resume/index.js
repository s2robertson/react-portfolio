// similar to portfolio projects, this could be made a prop
const proficiencies = [
    'Full-Stack JavaScript: Node.js/Express, and React',
    'Java',
    'Python',
    'Relational/SQL databases, MongoDB, and ORM/ODM libraries (Sequelize, Mongoose)',
    'RESTful web services',
    'OO design patterns',
    'Experience taking a project from requirements to deployment'
]

function ResumePage() {
    return (
        <main>
            <h2>My Resume</h2>
            <p><a href="https://docs.google.com/document/d/1BEVnW6AK1dv5wodDYf3uk2o9CvBBqAav/edit">View my resume on Google Docs</a></p>
            <h2>My Proficiencies</h2>
            <ul className="list-group">
                {proficiencies.map(proficiency => 
                    <li className="list-group-item">{proficiency}</li>
                )}
            </ul>
        </main>
    )
}

export default ResumePage;