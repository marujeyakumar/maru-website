import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';
import $ from 'jquery/';
import 'malihu-custom-scrollbar-plugin/';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'jquery-mousewheel';

class CustomNavbar extends Component {
    componentDidMount() {
        $(window).on("load",function(){
            $('.mega_menu_two .scroll').mCustomScrollbar({
                mouseWheelPixels: 50,
                scrollInertia: 0
            })
        })
    }
    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass} =this.props;
        return (

            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>
                        </nav>
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                            <li className="nav-item"><NavLink exact title="Home" className="nav-link" to='/'>Home</NavLink></li>
                                <li className="nav-item"><NavLink exact title="About" className="nav-link" to='/#About'>About</NavLink></li>
                                <li className="nav-item"><NavLink exact title="Experience" className="nav-link" to='/#Experience'>Experience</NavLink></li>
                                <li className="nav-item"><NavLink exact title="Contact" className="nav-link" to='/#Contact'>Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
               
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar;