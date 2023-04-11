import { Outlet, Link} from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <div>
            <nav>
                <ul className = "nav-bar">
                    <li className = "home-link" key = "home-button">
                        <Link to = "/">Home</Link>
                    </li>
                    <li className = "create-link" key = "create-button">
                        <Link to = "/create">Create</Link>
                    </li>
                    <li className = "view-link" key = "view-button">
                        <Link to = "/view">View</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;