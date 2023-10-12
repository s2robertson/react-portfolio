import { NavigationProvider } from './Navigation';
import Header from './components/Header';
import Body from './pages';
import Footer from './components/Footer';

import './App.css';

function App() {
    return (
        <NavigationProvider>
            <Header/>
            <Body />
            <Footer />
        </NavigationProvider>
    );
}

export default App;
