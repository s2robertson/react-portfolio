const footerLinks = [
    {
        label: 'GitHub',
        url: 'https://github.com/s2robertson'
    }, {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/s2robertson/'
    }, {
        label: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/22181321/s2robertson'
    }
]

function Footer() {
    return (
        <footer className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
            {footerLinks.map(link => <a href={link.url} className="btn">{link.label}</a>)}
        </footer>
    )
}

export default Footer;