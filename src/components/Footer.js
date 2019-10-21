import React from 'react';

const Footer=()=> {
    return (
        <div>
        <footer className="footer text-center">
            <div className="container">
                <div className="row">

                    {/*Footer Location*/}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">WRA Headquarters Location</h4>
                        <p className="lead mb-0">2260 Baseline Road, Suite 200</p>
                        <p className="lead mb-0">Boulder CO 80302</p>
                        <p className="lead mb-0">Phone: 303.444.1188</p>
                        <p className="lead mb-0">Fax: 303.786.8054</p>
                    </div>

                    {/*Footer Social Icons*/}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">WRA Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1"
                           href="https://www.facebook.com/westernresourceadvocates">
                            <i className="fab fa-fw fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/wradv">
                            <i className="fab fa-fw fa-twitter"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1"
                           href="https://www.linkedin.com/company/western-resource-advocates">
                            <i className="fab fa-fw fa-linkedin-in"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1"
                           href="https://www.instagram.com/westernresourceadvocates/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

                {/*Copyright Section*/}
            <section className="copyright py-4 text-center text-white">
            <div className="container">
                <small>Copyright &copy; Clean-Energy Website 2019</small>
            </div>
        </section>
        </div>
    )
};

export default Footer;