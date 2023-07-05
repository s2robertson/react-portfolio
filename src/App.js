import { useState } from 'react';
import Header from './Header';
import AboutPage from './pages/about';

export const PAGE_NAMES = {
    ABOUT: 'About',
    PORTFOLIO: 'Portfolio',
    CONTACT: 'Contact',
    RESUME: 'Resume'
};
Object.freeze(PAGE_NAMES);

function App() {
    const [activePage, setActivePage] = useState(PAGE_NAMES.ABOUT);

    let page;
    switch (activePage) {
        default:
            page = <AboutPage />
    }

    return (
        <div className="container">
            <Header activePage={activePage} onNavigate={setActivePage} />
            {page}
        </div>
    );
}

export default App;
