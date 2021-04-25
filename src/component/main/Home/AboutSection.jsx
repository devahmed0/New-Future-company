import React from 'react';
import Context from '../../../assets/js/context';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ExploreIcon from '@material-ui/icons/Explore';
class AboutSection extends React.Component {
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
                        <div id='mainCont_About2'  >
                             {/* <svg viewBox="0 0 1440 181" preserveAspectRatio="none" style={{ height: 100, width: "100%" }} className='css-1d3w5wq'  >
                                <path style={{ fill: "rgb(240 244 248)", stroke: "rgb(240 244 248)", strokeWidth: 1, fillRule: 'nonzero' }} d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"   >
                                </path>
                            </svg> */}
                            <div id='mainCont_About2_left' >
                                <div id='mainCont_About2_left_title' >Welcome to our wonderful world.</div>
                                <div style={{ marginBottom: 30 }} >   We sincerely hope that each and every user
                                entering our website will find exactly what he/she is looking for. With advanced features of
                                activating account and new login widgets, you will definitely have a great experience of using our web page.
</div>
                                <Link to='/About' id='btn' >
                                    <div id='getInbtn'  >
                                        <span>  Find Out More  <ArrowRightAltIcon /> </span>
                                    </div>
                                </Link>

                            </div>
                            <div id='mainCont_About2_right' >
                                <div className='row row-one cont_imgs' >
                                    <div className='col'>
                                        <div className='cont_img one' >
                                            <img src={require('../../../assets/img/1.svg')} alt='img' />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='cont_img two' >
                                            <img src={require('../../../assets/img/2.svg')} alt='img' />
                                        </div>
                                    </div>
                                </div>
                                <div className='row row-one cont_imgs' >
                                    <div className='col'>
                                        <div className='cont_img three' >
                                            <img src={require('../../../assets/img/3.svg')} alt='img' />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='cont_img four' >
                                            <img src={require('../../../assets/img/4.svg')} alt='img' />
                                        </div>
                                    </div>
                                </div></div>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default AboutSection;