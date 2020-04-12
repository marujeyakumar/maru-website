import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Portfoliosingle from '../components/Portfolios/Portfoliosingle';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import AboutMe from '../components/Portfolios/AboutMe';
const PortfolioSingle = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar FooterData={FooterData} slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
        
          
        </div>
    )
}
export default PortfolioSingle;