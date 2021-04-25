import React from 'react';
import Context from '../../../assets/js/context';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ExploreIcon from '@material-ui/icons/Explore';
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            data: [
                {
                    "img": require('../../../assets/img/nirvana.jpg'),

                    "name": "Android Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": require('../../../assets/img/qualia.jpg'),

                    "name": "IOS Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": require('../../../assets/img/nirvana.jpg'),

                    "name": "Desktop Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": require('../../../assets/img/qualia.jpg'),

                    "name": "Web Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },


            ]
        }
    }


    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div id='teamHomeSection' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <svg viewBox="0 0 1440 181" preserveAspectRatio="none" style={{ height: 100, width: "100%" }} className='css-1d3w5wq' >
                                <path style={{ fill: "rgb(240 244 248)", stroke: "rgb(240 244 248)", strokeWidth: 1, fillRule: 'nonzero' }} d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"   >
                                </path>
                            </svg>
                            <div id='ProjectContainer'  >
                                <div style={{ marginBottom: '3%',marginTop:'3%' }} >
                                    <ScrollAnimation animateIn='flipInX'
                                        animateOut='flipOutX' >
                                        <span className='hometab-heading'  > Latest Projects</span>

                                    </ScrollAnimation>
                                </div>
                                <div id='mainServices' >
                                    {this.state.data.map(((item, i) =>
                                        i < 2 ? (
                                            <div id='mainCardProject'  >
                                                <div id='card' key={i} >
                                                    <div id='details'>

                                                        <div style={{ padding: '14px' }} id='concepttext' >{item.desc}</div>
                                                        <div id='projectIcon' >
                                                            <ExploreIcon />
                                                        BROWSE
                                                        </div>
                                                    </div>
                                                    <div id='imgBox'> <img src={item.img} alt='img' />   </div>


                                                </div>
                                                <div id='project_title'  >{item.name}</div>
                                            </div>

                                        ) : (null)


                                    ))}
                                </div>
                                <Link to='/Project' id='btn' >
                                    <div id='getInbtn'  >
                                        <span>  See All Projects  <ArrowRightAltIcon /> </span>
                                    </div>
                                </Link>
                            </div>
 
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Projects;