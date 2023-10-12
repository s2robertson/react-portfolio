import { useState } from 'react';
// import { QueryParamProvider } from 'use-query-params';
// import { WindowHistoryAdapter } from 'use-query-params/adapters/window';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutPage from './pages/about';
import PortfolioPage from './pages/portfolio';
import ContactPage from './pages/contact';
import ResumePage from './pages/resume';

import './App.css';

const PAGES = [
    {
        label: 'About Me',
        url: '#about',
        component: <AboutPage />
    }, {
        label: 'Portfolio',
        url: '#portfolio',
        component: <PortfolioPage />
    }, {
        label: 'Contact',
        url: '#contact',
        component: <ContactPage />
    }, {
        label: 'Resume',
        url: '#resume',
        component: <ResumePage />
    }
];
Object.freeze(PAGES);

function App() {
    const [activePage, setActivePage] = useState(PAGES[0]);

    return (
        //<QueryParamProvider adapter={WindowHistoryAdapter}>
        <>
            <Header pages={PAGES} activePage={activePage} onNavigate={setActivePage} />
            <main className='container p-3 clearfix'>
                {activePage.component}
            </main>
            <Footer />
        </>
        //</QueryParamProvider>
    );
}

export default App;
