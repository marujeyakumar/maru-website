import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Portfoliosingle from '../components/Portfolios/Portfoliosingle';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const PortfolioSingle = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Maru Jeyakumar" Pdescription="Software Engineer with a passion for Front End"/>
            <Portfoliosingle/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default PortfolioSingle;