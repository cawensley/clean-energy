import React from "react";
import PageHeading from "../molecules/PageHeading";
import AboutPerson from "../molecules/AboutPerson";

const About = () => (
    <div className="p-padding p-background_image mb-0">
        <div className="container">
            <PageHeading title={"Who We Are"}/>
            <AboutPerson
                image={`kenface.jpg`}
                title={`Ken Wilson – Engineer and Scientist`}
                text={`Ken Wilson is a lifetime learner and holds master’s degrees in electrical engineering (1974 University of
                        Illinois) and biology (2014 University of Colorado). He spent 18 years at Bell Labs as a systems engineer
                        in telecommunications. From 1998 to 2008 he was an expert witness and consultant for
                        telecommunications companies. From 2009 to the present he has worked as a consultant and expert
                        witness in the energy industry, currently on the staff of Western Resource Advocates in Boulder
                        Colorado.`}
            />
            <AboutPerson
                image={`headshot_square.jpg`}
                title={`Alex Wensley – Web Developer and Engineer`}
                text={`Alex Wensley is a Front-end Web Developer and has a masters degree in Materials Science & Engineering (2005 Virginia Tech).
                         He spent 11 years solving material failures for both litigation and industrial clients.  From 2019 to the present he has studied
                        web development and networking engineering.`}
            />
        </div>
    </div>
)

export default About;