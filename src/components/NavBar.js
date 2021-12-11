



function NavBar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <p className="navbar-brand Title">Navbar</p>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}


export default NavBar
