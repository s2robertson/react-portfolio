function Header({ children }) {
    return (
        <header className="bg-custom">
            <div className="container p-3 d-flex flex-column flex-lg-row align-items-center">
                <h1 className="text-center text-lg-start flex-grow-1">Steven Robertson's Portfolio</h1>
                {children}
            </div>
        </header>
    )
}

export default Header;