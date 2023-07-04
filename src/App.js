import { useState } from 'react';
import Header from './Header';
import './App.css';

export const PAGE_NAMES = {
    ABOUT: 'About',
    PORTFOLIO: 'Portfolio',
    CONTACT: 'Contact',
    RESUME: 'Resume'
};
Object.freeze(PAGE_NAMES);

function App() {
    const [activePage, setActivePage] = useState(PAGE_NAMES.ABOUT);

    return (
        <div className="container">
            <Header activePage={activePage} onNavigate={setActivePage} />
            <p>Currently showing: {activePage}</p>
        </div>
    );
}

export default App;
