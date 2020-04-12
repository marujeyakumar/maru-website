import React from 'react';

const AboutMe =()=>{
    return(
        <section className="portfolio_details_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="portfolio_details_info pr_50">
                            <h5 className="f_700 f_p f_size_20 t_color3 mb-30">About Me</h5>
                            <p className="f_400 f_size_15 mb-0">Hello! My name is Marudevi Jeyakumar, but I like to go by Maru (pronounced muh-roo). I'm a junior Software Engineer with a keen interest in front end and mobile development. I currently work as a Software Engineer at the Healthcare of Ontario Pension Plan in Toronto, Canada. I graduated from the Univeristy of Toronto with a degree in Computer Engineering in June 2019. In my free time, I am an intermediate Aerialist and am striving to get better. I enjoy reading, coding new projects, and spending time with my friends and family.  </p>
                           
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="portfolio_details_gallery">
                            <img className="img-fluid mb_20" src={require('../../img/portfolio-details/pr_details1.jpg')} alt=""/>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
} 
export default AboutMe;