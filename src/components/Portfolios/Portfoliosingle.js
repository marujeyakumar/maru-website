import React from 'react';

const Portfoliosingle =()=>{
    return(
        <section className="portfolio_details_area sec_pad">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                    <div className="portfolio_details_info pr_50 mb_50">
                            <h5 className="f_700 f_p f_size_20 t_color3 mb-30">About Me</h5>
                            <p className="f_400 f_size_15 mb-0">Hello! My name is Marudevi Jeyakumar, but I like to go by Maru (pronounced muh-roo). I'm a junior Software Engineer with a keen interest in front end and mobile development. I currently work as a Software Engineer at the Healthcare of Ontario Pension Plan in Toronto, Canada. I graduated from the Univeristy of Toronto with a degree in Computer Engineering in June 2019. In my free time, I am an intermediate Aerialist and am striving to get better. I enjoy reading, coding new projects, and spending time with my friends and family.  </p>
                           
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="portfolio_details_info pr_50">
                            <h5 className="f_700 f_p f_size_20 t_color3 mb-30">Experience</h5>
                            </div>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-lg-3">
                        <img className="img-fluid mb_20" src={require('../../img/hoopp_logo.svg')} alt=""/>
                    </div>
                    <div className="col-lg-9">
                         <h2 className="f_500 f_size_16 mb-30"> Systems Developer, Healthcare of Ontario Pension Plan (HOOPP) (June 2019 - Present)</h2>
                         <p className="f_400 f_size_15 mb-0"> I work in the Investments Solutions Department, where I help build investment applications in an agile team. The traders use these applications to trade faster and grow the pension fund. </p>        
                         <p></p>                 
                         <p className="f_400 f_size_15 mb-0"> Front End: React Js, Redux, Typescript, Jest, Enzyme </p>
                         <p className="f_400 f_size_15 mb-0"> Back End: C# .NET Core, Spring Boot, Kotlin, Apache Camel </p>
                         <p className="f_400 f_size_15 mb-0"> Other Tools: AWS SQS, S3 Buckets, Parameter Store </p>
                         <p> </p>
                     </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                    <h2></h2>
                    </div>
                    <div className="col-lg-9">
                         <h2 className="f_500 f_size_16 mb-30"> Systems Developer Co-op, Healthcare of Ontario Pension Plan (HOOPP) (May 2017 - July 2018)</h2>
                         <p className="f_400 f_size_15 mb-0"> I started off as a Co-op developer at HOOPP where I worked for 15 months as part of University of Toronto's Professional Experience Year (PEY) Program. This co-op was in between my 3rd and 4th year of University. </p>
                     </div>
                </div>
            </div>
        </section>
    )
} 
export default Portfoliosingle;