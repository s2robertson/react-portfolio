function Navigation({ pages, activePage, onNavigate }) {
    return (
        <nav className="d-flex flex-column flex-sm-row">
            {pages.map(page => (
                <a  href={page.url}
                    className={`btn btn-custom m-1 ${activePage === page ? 'active' : ''}`}
                    onClick={() => onNavigate(page)}
                    key={page.url}
                >
                    {page.label}
                </a>
            ))}
        </nav>
    )
}

export default Navigation;