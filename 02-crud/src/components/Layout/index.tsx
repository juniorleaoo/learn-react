import { Component } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

class Layout extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default Layout;