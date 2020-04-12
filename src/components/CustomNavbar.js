import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';
import Reveal from 'react-reveal/Reveal/';

import $ from 'jquery/';
import 'malihu-custom-scrollbar-plugin/';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'jquery-mousewheel';



//custom scroll to div function 
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);


class CustomNavbar extends Component {
    constructor(props) {
        super(props)
        this.aboutMeRef = React.createRef()
        this.homeRef = React.createRef(); 
        this.experienceRef = React.createRef(); 
        this.projectsRef = React.createRef(); 
        this.scrollToBottom = React.createRef(); 
        
    }

    componentDidMount() {
        $(window).on("load",function(){
            $('.mega_menu_two .scroll').mCustomScrollbar({
                mouseWheelPixels: 50,
                scrollInertia: 0
            })
        })
    }

    handleScrollToBottom() {
        if(this.scrollToBottom.current) {
            window.scrollTo({
                top: this.scrollToBottom.current.offsetTop,
                left: 0,
                behavior: 'smooth'
              });
        }
    }
    handleScrollToTop() {
        if(this.homeRef.current) {
            window.scrollTo({
                top: this.homeRef.current.offsetTop - 250,
                left: 0,
                behavior: 'smooth'
              });
        }
    }
    handleScrollToElement() {
        if(this.aboutMeRef.current) {
            window.scrollTo({
                top: this.aboutMeRef.current.offsetTop - 150,
                left: 0,
                behavior: 'smooth'
              });
        }
    }
    handleScrollToExperienceRef() {
        if(this.experienceRef.current) {
            window.scrollTo({
                top: this.experienceRef.current.offsetTop - 150,
                left: 0,
                behavior: 'smooth'
              });
        }
    }
    handleScrollToProjectsRef() {
        if(this.projectsRef.current) {
            window.scrollTo({
                top: this.projectsRef.current.offsetTop - 150,
                left: 0,
                behavior: 'smooth'
              });
        }
    }
    
    render() {
        var {FooterData, mClass, nClass, cClass} =this.props;

        return (
          <div>
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
                            <li className="nav-item"><NavLink exact title="Home" className="nav-link" to='/' onClick={this.handleScrollToTop.bind(this)}>Home</NavLink></li>
                                <li className="nav-item"><NavLink exact title="About" className="nav-link" to='/#About' onClick={this.handleScrollToElement.bind(this)}>About</NavLink></li>
                                <li className="nav-item"><NavLink exact title="Experience" className="nav-link" to='/#Experience' onClick={this.handleScrollToExperienceRef.bind(this)}>Experience</NavLink></li>
                                <li className="nav-item"><NavLink exact title="Projects" className="nav-link" to='/#Projects' onClick={this.handleScrollToProjectsRef.bind(this)}>Projects</NavLink></li>
                                <li className="nav-item"><NavLink exact title="Contact" className="nav-link" to='/#Contact' onClick={this.handleScrollToBottom.bind(this)}>Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>

            {/* BreadCrumb with Title, Image */}
            <section className={"breadcrumb_area"}>
                <div ref={this.homeRef} className="container">
                    <div className="breadcrumb_content text-center">
                    <div className="portfolio_details_gallery maru-travel-image mb_20">
                            <img className="img-fluid maru-travel-image" src={require('../img/xyz.jpeg')} alt=""/>
                        </div>
                        <Reveal effect="fadeInUp"><h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">Maru Jeyakumar</h1></Reveal>
                        <p className="f_400 w_color f_size_16 l_height26">Software Engineer</p>
                    </div>
                </div>
            </section> 

            {/* Page Content */}
            <section className="portfolio_details_area sec_pad">
                        <div className="container">
                            <div ref={this.aboutMeRef} className="row">
                                <div className="col-lg-12">
                                <div className="portfolio_details_info pr_50 mb_50">
                                        <h5 className="f_700 f_p f_size_30 t_color3 mb-30">About Me</h5>
                                        <p className="f_400 f_size_15 mb-0">Hello! My name is Marudevi Jeyakumar, but I like to go by Maru (pronounced muh-roo). I'm a junior Software Engineer with a keen interest in front end and mobile development. I currently work as a Software Engineer at the Healthcare of Ontario Pension Plan in Toronto, Canada. I graduated from the Univeristy of Toronto with a degree in Computer Engineering in June 2019. In my free time, I am an intermediate Aerialist and am striving to get better. I enjoy reading, coding new projects, and spending time with my friends and family.  </p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div ref={this.experienceRef}  className="row">
                                <div className="col-lg-12">
                                    <div className="portfolio_details_info pr_50">
                                        <h5 className="f_700 f_p f_size_30 t_color3 mb-30">Experience</h5>
                                        </div>
                                    </div>
                                </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <img className="img-fluid mb_20" src={require('../img/hoopp_logo.svg')} alt=""/>
                                </div>
                                <div className="col-lg-9">
                                    <h2 className="f_600 f_size_20 mb-30"> Systems Developer, Healthcare of Ontario Pension Plan (HOOPP) (June 2019 - Present)</h2>
                                    <p className="f_400 f_size_15 mb-0"> I work in the Investments Solutions Department, where I help build investment applications in an agile team. The traders use these applications to trade faster and grow the pension fund. </p>        
                                    <p></p>                 
                                    <p className="f_400 f_size_15 mb-0"> Front End: React Js, Redux, Typescript, Jest, Enzyme </p>
                                    <p className="f_400 f_size_15 mb-0"> Back End: C# .NET Core, Spring Boot, Kotlin, Apache Camel </p>
                                    <p className="f_400 f_size_15 mb-0"> Other Tools: AWS SQS, S3 Buckets, Parameter Store </p>
                                    <p> </p>
                                </div>
                            </div>
                            <div className="row mt_30">
                                <div className="col-lg-3">
                                <h2></h2>
                                </div>
                                <div className="col-lg-9">
                                    <h2 className="f_600 f_size_20 mb-30"> Systems Developer Co-op, Healthcare of Ontario Pension Plan (HOOPP) (May 2017 - July 2018)</h2>
                                    <p className="f_400 f_size_15 mb-0"> I started off as a Co-op developer at HOOPP where I worked for 15 months as part of University of Toronto's Professional Experience Year (PEY) Program. This co-op was in between my 3rd and 4th year of University. </p>
                                </div>
                            </div>
                            <div className="row mt_30">
                                <div className="col-lg-3">
                                <img className="img-fluid pl_50" style={{height:'20vh'}}src={require('../img/dubdub.jpeg')} alt=""/>

                                </div>
                                <div className="col-lg-9">
                                <h2 className="f_600 f_size_20 mt_30 mb-30"> Quality Assurance Intern, iOS and Android, dubdub (June 2016 - August 2016)</h2>
                                    <p className="f_400 f_size_15 mb_30"> I performed manual QA testing for dubdub, an iOS video-editing application in an agile development environment. I also established an automated testing process for dubdub using Gherkin DSL, Page Object Pattern, and Cucumber plugins and
                                        real device automation that cut manual testing effort by 75%.  <a href="https://github.com/marujeyakumar/appiumiosautomation"> You can see the source code here.</a></p>
                                </div>
                            </div>

                            <div ref={this.projectsRef} className="row mt_75"> 
                                <div className="col-lg-12">
                                    <div className="portfolio_details_info pr_50 mb_50">
                                            <h5 className="f_700 f_p f_size_30 t_color3 mb-30">Projects</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="img-fluid" src={require('../img/recordr.png')} alt=""/>
                                </div>
                                <div className="col-lg-6">
                                        <div className="portfolio_details_info pr_50 mb_50">
                                            <h2 className="f_600 f_size_20  mb-30"> University of Toronto, Capstone Design Project (Sept 2018 - April 2019)</h2>
                                            <p className="f_400 f_size_15 mb_30"> 
                                                Worked in a team of 4 to build a real time facial tracking video system which captures video through a smartphone mounted on a rotating motor, processes the video frames through a Convolutional Neural Network, and sends commands to the motor to rotate left or right. 
                                                We successfully implemented a system that can recognize your facial features, and keeps the smartphone camera fixed on you as you walk left to right. For more informaiton, please reach out to me through email or LinkedIn. 
                                            </p>
                                        </div>
                                </div>
                            </div>

                            <div className="row mt_40">
                                <div className="col-lg-6">
                                    <img className="img-fluid" src={require('../img/xchange.png')} alt=""/>
                                </div>
                                <div className="col-lg-6">
                                        <div className="portfolio_details_info pr_50 mb_50">
                                            <h2 className="f_600 f_size_20  mb-30"> University of Toronto, Software Engineering Course Project (Sept 2018 - Dec 2018)</h2>
                                            <p className="f_400 f_size_15 mb_30"> Worked in a team of 6 to build a borrowing/lending responsive web application using Ruby on Rails and deployed on Heroku.
                                            <a href="https://xchange-csc444.herokuapp.com"> You can check out the website here, </a> and  <a href=" ​https://github.com/ahomayouni/XChange​"> you can check out the source code here. </a> </p>
                                        </div>
                                </div>
                            </div>
                         
                        </div>
                    </section>

                     <footer ref={this.scrollToBottom} className={`footer_area footer_area_four f_bg`}>
              
              <div className="footer_bottom">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-4 col-md-5 col-sm-6">
                              <p className="mb-0 f_400">Maru Jeyakumar</p>
                          </div>
                          <div className="col-lg-4 col-md-3 col-sm-6">
                        
                              <div className="f_social_icon_two text-center">
                                  {
                                      FooterData.socialIcon.map(item =>{
                                       
                                          return(
                                              <a href={item.url} key={item.id}><i className={item.icon}></i></a>
                                          )
                                      })
                                  }
                              </div>
                          </div>
                       
                      </div>
                  </div>
              </div>
          </footer>
              </div>
        );
    }

}

export default CustomNavbar;