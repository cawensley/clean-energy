import React from 'react';

const Footer=()=> {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return (
        <div>
            <div className="footer text-center">

                <div className="mb-3 mb-lg-0">
                    <h4 className="text-uppercase lead font-weight-bold mb-3">WRA Headquarters</h4>
                    <p className="mb-3">2260 Baseline Road, Suite 200<br/>
                    Boulder, CO 80302<br/>
                    Phone: 303.444.1188<br/>
                    Fax: 303.786.8054</p>

                    <a className="btn btn-outline-light btn-social mx-1"
                       href="https://www.facebook.com/westernresourceadvocates">
                        <i className="fab fa-fw fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1"
                       href="https://twitter.com/wradv">
                        <i className="fab fa-fw fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1"
                       href="https://www.linkedin.com/company/western-resource-advocates">
                        <i className="fab fa-fw fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1"
                       href="https://www.instagram.com/westernresourceadvocates/">
                        <i className="fab fa-instagram"></i></a>
                </div>
            </div>

            <div className="copyright py-1 text-center text-white">
                <small>Copyright &copy; Clean-Energy Website {currentYear.toString()}</small>
            </div>
        </div>
    )
};

export default Footer;