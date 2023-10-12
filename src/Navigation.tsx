import { useState, useEffect, useContext, createContext } from 'react';
import { QueryParamProvider, useQueryParam, StringParam } from 'use-query-params';
import { WindowHistoryAdapter } from 'use-query-params/adapters/window';

import AboutPage from './pages/about';
import PortfolioPage from './pages/portfolio';
import ContactPage from './pages/contact';
import ResumePage from './pages/resume';

export const pages = [{
        name: 'about',
        label: 'About Me',
        component: <AboutPage />
    }, {
        name: 'portfolio',
        label: 'Portfolio',
        component: <PortfolioPage />
    }, {
        name: 'contact',
        label: 'Contact',
        component: <ContactPage />
    }, {
        name: 'resume',
        label: 'Resume',
        component: <ResumePage />
    }
];
Object.freeze(pages);
type Page = typeof pages[number];

interface NavigationProviderProps {
    children: React.ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
    return (
        <QueryParamProvider adapter={WindowHistoryAdapter}>
            <InnerNavigationProvider>
                {children}
            </InnerNavigationProvider>
        </QueryParamProvider>
    )
}

type PageContextType = [Page, (p: Page) => void] | null;
const PageContext = createContext<PageContextType>(null);

function InnerNavigationProvider({ children }: NavigationProviderProps) {
    const [pageParam, setPageParam] = useQueryParam('page', StringParam);

    const [, setCounter] = useState(0);
    useEffect(() => {
        function callback() {
            setCounter(c => c + 1);
        }
        window.addEventListener('popstate', callback);
        return () => window.removeEventListener('popstate', callback);
    }, []);

    const page = pages.find(p => p.name === pageParam) || pages[0];
    function setPageAndParam(p: Page) {
        setPageParam(p.name);
        setCounter(c => c + 1);
    }
    return (
        <PageContext.Provider value={[page, setPageAndParam]}>
            {children}
        </PageContext.Provider>
    )
}

export function useNavigation() {
    const vals = useContext(PageContext);
    if (!vals) {
        throw new Error('useNavigation hook used without NavigationProvider');
    }

    return vals;
}