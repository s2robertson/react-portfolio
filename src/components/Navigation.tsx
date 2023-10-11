import React from 'react';

interface Page {
    label: string,
    url: string,
    component: () => React.ReactNode
}

interface NavigationProps {
    pages: Page[],
    activePage: Page,
    onNavigate: React.Dispatch<React.SetStateAction<Page>>
}

function Navigation({ pages, activePage, onNavigate }: NavigationProps) {
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