import { useState } from 'react';
import Header from './Header';
import AboutPage from './pages/about';
import PortfolioPage from './pages/portfolio';
import ContactPage from './pages/contact';
import ResumePage from './pages/resume';

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
        case PAGE_NAMES.PORTFOLIO:
            page = <PortfolioPage />;
            break;
        case PAGE_NAMES.CONTACT:
            page = <ContactPage />;
            break;
        case PAGE_NAMES.RESUME:
            page = <ResumePage />;
            break;
        default:
            page = <AboutPage />;
    }

    return (
        <div className="container">
            <Header activePage={activePage} onNavigate={setActivePage} />
            {page}
        </div>
    );
}

export default App;
