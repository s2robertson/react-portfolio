import React from 'react';
import './Portfolio.css';

// could be turned into a prop
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
        title: 'Freelancer Platform',
        description: 'Full-stack MERN, GraphQL',
        bgClass: 'freelancer-bg',
        repoUrl: 'https://github.com/s2robertson/freelance-platform',
        deployedUrl: 'https://freelance-platform-5f9607a54217.herokuapp.com/'
    }
]

function PortfolioPage() {
    return (
        <>
            <h2>My Projects</h2>
            <div className='row g-3'>
                {projects.map(project => (<Project project={project} className='col-md-6' key={project.bgClass} />))}
            </div>
        </>
    )
}

interface ProjectProps {
    project: typeof projects[number],
    className: string
}

function Project({ project, className }: ProjectProps) {
    return (
        <div className={className}>
            <div className={`project-list-item ${project.bgClass} p-3`}>
                <div className='bg-custom p-3'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><a href={project.repoUrl}>Repo</a> <a href={project.deployedUrl}>Deployed</a></p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;