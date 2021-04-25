

import React from 'react';

class Creative extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {

        return (
            <div id='main_creative' >
   <svg viewBox="0 0 1440 181" preserveAspectRatio="none" style={{ height: 100, width: "100%" }} className='css-1d3w5wq'  >
                                <path style={{ fill: "rgb(240 244 248)", stroke: "rgb(240 244 248)", strokeWidth: 1, fillRule: 'nonzero' }} d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"   >
                                </path>
                            </svg>
                <div id='inner_creative'  >
                    <div id='creative_title' >Creative App Ideas</div>
                    <div style={{ width: '100%',padding:15,fontSize:20 }} >
                        <div>Information Architecture</div>
                        <div id='creative_slider'  >
                            <div id='creative_slider1' />
                        </div>
                    </div>
                    <div style={{ width: '100%',padding:15,fontSize:20  }} >
                        <div>App Development</div>
                        <div id='creative_slider'  >
                            <div id='creative_slider2' />
                        </div>
                    </div>
                    <div style={{ width: '100%',padding:15,fontSize:20  }} >
                        <div>User Interface</div>
                        <div id='creative_slider'  >
                            <div id='creative_slider3' />
                        </div>
                    </div>
                    <div style={{ width: '100%',padding:15,fontSize:20  }} >
                        <div>Total Memory Usage</div>
                        <div id='creative_slider'  >
                            <div id='creative_slider4' />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Creative;