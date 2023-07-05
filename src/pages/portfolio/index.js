import './Portfolio.css';

const projects = [
    {
        title: 'Bill Payment Tracker',
        description: 'Full-Stack: Node.js, Express.js, Handlebars.js, MySQL/Sequelize.js',
        bgClass: 'bill-payment-tracker-bg',
        repoUrl: 'https://github.com/s2robertson/bill-payment-tracker',
        deployedUrl: 'https://s2robertson-payment-tracker-2c1497a835bb.herokuapp.com/'
    }, {
        title: 'Book Search',
        description: 'Front-end JavaScript, Bulma',
        bgClass: 'book-search-bg',
        repoUrl: 'https://github.com/s2robertson/book-search-project',
        deployedUrl: 'https://s2robertson.github.io/book-search-project'
    }, {
        title: 'Blog Site',
        description: 'Full-Stack: Node.js, Express.js, Handlebars.js, MySQL/Sequelize.js',
        bgClass: 'blog-site-bg',
        repoUrl: 'https://github.com/s2robertson/blog-site',
        deployedUrl: 'https://s2robertson-blog-site.herokuapp.com/'
    }, {
        title: 'Weather Dashboard',
        description: 'Front-end JavaScript, jQuery, Bootstrap',
        bgClass: 'weather-dashboard-bg',
        repoUrl: 'https://github.com/s2robertson/weather-dashboard',
        deployedUrl: 'https://s2robertson.github.io/weather-dashboard/'
    }, {
        title: 'Quiz Game',
        description: 'Front-end JavaScript',
        bgClass: 'quiz-game-bg',
        repoUrl: 'https://github.com/s2robertson/quiz-game',
        deployedUrl: 'https://s2robertson.github.io/quiz-game/'
    }, {
        title: 'Text Editor PWA',
        description: 'Progressive Web Application, Workbox, Webpack',
        bgClass: 'jate-bg',
        repoUrl: 'https://github.com/s2robertson/jate-text-editor',
        deployedUrl: 'https://s2robertson-jate-c143c4308be7.herokuapp.com/'
    }
]

function PortfolioPage() {
    return (
        <main>
            <h2>My Projects</h2>
            <div className='row'>
                {projects.map(project => 
                    <div className={`project-list-item ${project.bgClass} col-md-6`}>
                        <div className='bg-body p-3'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p><a href={project.repoUrl}>Repo</a> <a href={project.deployedUrl}>Deployed</a></p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default PortfolioPage;