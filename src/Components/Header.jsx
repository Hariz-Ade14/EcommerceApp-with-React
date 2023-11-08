import { FaSearch } from "react-icons/fa";


const Header = (props) => {
    return (  
            <nav id="navBar" className="navbar navbar-expand-lg bg-white shadow p-0 fixed-top">
                <div className="container-fluid">
                    <p className="brandName m-0">Verona</p>
                    <button className="navbar-toggler m-0" type="button" style={{border:"none",outline:"none"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {props.menu.map((menuItem) => {
                                return (
                                    <li className="nav-item" key={menuItem.id}>
                                        <a id="nav-link" className="nav-link text-dark" href={menuItem.url}>{menuItem.page}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="search bg-white h-25 mt-2 d-flex align-items-start" style={{borderRadius:"10px"}}>
                            <input className="form-control outline-none" style={{height:"28px", border: "none" , outline:"none"}} type="text" placeholder="Search"/>
                            <button className="btn py-0"><FaSearch className="m-0"/></button>
                        </div>

                    </div>
                    </div>
                </div>
            </nav>
            )
    
       
    
}
 
export default Header;