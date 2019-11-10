import React from 'react';
import Buttonlink from "../atoms/Buttonlink";

const Footer=()=> {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return (
        <div className="text-white text-center">
            <div className="bg-secondary py-3 mb-0">

                <h4 className="text-uppercase lead font-weight-bold mb-3">WRA Headquarters</h4>
                <p className="mb-3">2260 Baseline Road, Suite 200<br/>
                Boulder, CO 80302<br/>
                Phone: 303.444.1188<br/>
                Fax: 303.786.8054</p>

                <Buttonlink weblink={`https://www.facebook.com/westernresourceadvocates`}
                            icon={`fab fa-fw fa-facebook-f`}/>
                <Buttonlink weblink={`https://twitter.com/wradv`}
                            icon={`fab fa-fw fa-twitter`}/>
                <Buttonlink weblink={`https://www.linkedin.com/company/western-resource-advocates`}
                            icon={`fab fa-fw fa-linkedin-in`}/>
                <Buttonlink weblink={`https://www.instagram.com/westernresourceadvocates/`}
                            icon={`fab fa-instagram`}/>
            </div>

            <div className="bg-dark py-1">
                <small>Copyright &copy; Clean-Energy Website {currentYear.toString()}</small>
            </div>
        </div>
    )
};

export default Footer;