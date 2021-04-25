import React from 'react';
import Context from '../../../assets/js/context';
import NavBar from '../common/NavBar';
import { withController } from 'react-scroll-parallax';
import ScrollUpButton from "react-scroll-up-button";
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Services from '../common/Services';
import WhyUs from '../WhyUs';
import Particles from 'react-particles-js';
import ProjectSection from './ProjectSection';
import Logo1 from './Logo1';
import TeamSection from '../common/TeamSection';
import Footer from '../common/Footer';
import AboutSection from './AboutSection';
import Creative from './Creative';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }


    }


    render() {
        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div id='min1_home1' >
                            <div id='mainCont1'>

                                <div className='homeBgbimg'  >
                                    <NavBar />
                                    <Particles style={{ position: 'absolute' }}
                                        params={{
                                            particles: {
                                                number: {
                                                    value: 200,
                                                    density: {
                                                        enable: true,
                                                        value_area: 2000,
                                                    }
                                                },
                                                shape: {
                                                    type: "circle",
                                                    stroke: {
                                                        "width": 2,
                                                        "color": "#fff"
                                                    }
                                                },
                                            }
                                        }}
                                    />
                                    <div style={{ position: 'relative' }} >

                                        <div id='homeBgMainDiv' >
                                            <div id='homeBgMainP1'  >IT Solution for Your Business</div>
                                            <div></div>
                                            <Link to='/Contact' id='btn' >
                                                <div id='getInbtn' >
                                                    <span>  Get in Touch  <ArrowRightAltIcon /> </span>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                    <div id='downHeaderNavContiner'>

                                        <Services />
                                        <WhyUs />
                                        <Creative />
                                        <div  id='main_parallex'  />
                                        {/* <ProjectSection /> */}
                                     <AboutSection />
                                        {/* <div id='teamHomeSection' >
                                            <div id='aboutTitleTeam' style={{ color: '#fff' }} >

                                                <small>WHO WE ARE</small>
                                                <h2>Meet The Team</h2>
                                            </div>
                                            <TeamSection />
                                          
                                        </div> */}
                                        <Logo1 />
                                            <Footer />
                                        <ScrollUpButton
                                            StopPosition={0}
                                            ShowAtPosition={150}
                                            EasingType='easeOutCubic'
                                            AnimationDuration={2000}
                                            ContainerClassName='ScrollUpButton__Container'
                                            TransitionClassName='ScrollUpButton__Toggled'
                                            style={{ backgroundColor: 'rgba(46, 48, 49, 0.7)' }}
                                            ToggledStyle={{}}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default withController(Home);