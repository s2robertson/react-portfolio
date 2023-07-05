function Header({ children }) {
    return (
        <header className="d-flex flex-column flex-lg-row align-items-center">
            <h1 className="text-center text-lg-start flex-grow-1">Steven Robertson's Portfolio</h1>
            {children}
        </header>
    )
}

export default Header;