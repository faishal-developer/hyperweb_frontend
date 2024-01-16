import React from 'react';
import Navbar from '../../components/Navbar/Navbar.view';
import Footer from '../../components/Footer/Footer';

const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default layout;