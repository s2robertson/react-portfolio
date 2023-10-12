import React from 'react';

interface Page {
    label: string,
    url: string,
    component: JSX.Element
}

interface HeaderProps {
    pages: Page[],
    activePage: Page,
    onNavigate: React.Dispatch<React.SetStateAction<Page>>
}

function Header({ pages, activePage, onNavigate }: HeaderProps) {
    return (
        <header className="bg-custom">
            <div className="container p-3 d-flex flex-column flex-lg-row align-items-center">
                <h1 className="text-center text-lg-start flex-grow-1">Steven Robertson's Portfolio</h1>
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
            </div>
        </header>
    )
}

export default Header;