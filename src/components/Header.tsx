import React from 'react';

import { pages, useNavigation } from '../Navigation';

function Header() {
    const [activePage, setActivePage] = useNavigation();
    console.log('Rendering header');
    return (
        <header className="bg-custom">
            <div className="container p-3 d-flex flex-column flex-lg-row align-items-center">
                <h1 className="text-center text-lg-start flex-grow-1">Steven Robertson's Portfolio</h1>
                <nav className="d-flex flex-column flex-sm-row">
                    {pages.map(page => (
                        <button 
                            className={`btn btn-custom m-1 ${activePage === page ? 'active' : ''}`}
                            onClick={() => setActivePage(page)}
                            key={page.name}
                        >
                            {page.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header;