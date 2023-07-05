import { PAGE_NAMES } from "./App";

function Header({ activePage, onNavigate }) {
    return (
        <header className="d-flex flex-column flex-lg-row align-items-center">
            <h1 className="text-center text-lg-start flex-grow-1">Steven Robertson's Portfolio</h1>
            <nav className="d-flex flex-column flex-sm-row">
                <a  href="#about"
                    className={activePage === PAGE_NAMES.ABOUT ? 'active btn' : 'btn'}
                    onClick={() => onNavigate(PAGE_NAMES.ABOUT)}
                >
                    About Me
                </a>
                <a  href="#portfolio"
                    className={activePage === PAGE_NAMES.PORTFOLIO ? 'active btn' : 'btn'}
                    onClick={() => onNavigate(PAGE_NAMES.PORTFOLIO)}
                >
                    Portfolio
                </a>
                <a  href="#contact"
                    className={activePage === PAGE_NAMES.CONTACT ? 'active btn' : 'btn'}
                    onClick={() => onNavigate(PAGE_NAMES.CONTACT)}
                >
                    Contact
                </a>
                <a  href="#resume"
                    className={activePage === PAGE_NAMES.RESUME ? 'active btn' : 'btn'}
                    onClick={() => onNavigate(PAGE_NAMES.RESUME)}
                >
                    Resume
                </a>
            </nav>
        </header>
    )
}

export default Header;