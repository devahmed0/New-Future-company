import React from 'react';
import Context from '../../assets/js/context';
import NavBar from './common/NavBar';
import { withController } from 'react-scroll-parallax';
import ScrollUpButton from "react-scroll-up-button";
import { Row, Col } from 'react-bootstrap';
import Footer from './common/Footer';
import { TextInput, Textarea } from 'evergreen-ui';
// import axios from 'axios';

// import { ToastContainer, toast } from 'react-toastify';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      body: '',
      to: ''
    }


  }



  handleLoad = () => {
    this.props.parallaxController.update();
  };
  render() {
    return (
      <Context.Consumer>
        {ctx => {

          return (
            <div>
              {/* <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnVisibilityChange
                  draggable
                  pauseOnHover
                /> */}

              <NavBar />
              <div style={{ width: '100%' }} id='sectionContactBgImg' >
               <div  id='contactHeader_bgb' />
              </div>


              <div id='contacthome'>


                <div id='contactpage'>

                  <Row style={{ marginRight: 0 }} id='maprow'><Col xs={12} >
                  <div id='p1ss'> CONTACT US </div>
                    <iframe id="gmap_canvas"
                      src="https://maps.google.com/maps?q=%D8%AD%D9%8A%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='map'></iframe>



                  </Col></Row>
                  <div id='contactrow'>
                    <div className='contactMainCard'>
                      <p id='sarstylefont'><i className="fas fa-map-marker-alt"></i></p>
                      <div id='contactTextAdd'>      <span style={{ paddingLeft: '10px', color: '#000' }} > Baghdad - Hay-Aljama'a  </span></div>

                    </div>
                    <div className='contactMainCard'>
                      <p id='sarstylefont'> <i className="fas fa-phone"></i></p>
                      <div id='contactTextAdd'> <span style={{ paddingLeft: '10px', color: '#000' }} > +964 77246222255    </span>   </div>

                    </div>
                    <div className='contactMainCard'>
                      <p id='sarstylefont'> <i className="fas fa-envelope-open"></i></p>
                      <div id='contactTextAdd'>  <span style={{ paddingLeft: '10px', color: '#000' }} > info@company.com  </span>
                      </div>

                    </div>

                  </div >

                </div>


                <div id='contactMainForm'>
                  <Row style={{ marginRight: 0, width: '90%', paddingTop: '3%' }} >
                    <Col>
                      <div >
                        <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: '30px', color: 'rgb(127 31 138)' }}>For More Inquiry Please Send as Email:</p>

                      </div>
                    </Col>
                  </Row>
                </div>

                
                <div id='contactMainForm'>
                  <Row style={{ marginRight: 0, width: '90%' }} >
                    <Col lg={6} id='ww' >
                      <div id='area'>
                        <TextInput id='textstyle'
                          name="text-input-name" type='email'
                          placeholder="E-mail" height='40px' width='100%'
                          value={this.state.to} onChange={(e) => {
                            this.setState({ to: e.target.value })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6} id='ww'  >
                      <div id='area'>
                        <TextInput id='textstyle'
                          name="text-input-name"
                          placeholder="subject" height='40px' width='100%'
                          value={this.state.subject} onChange={(e) => {
                            this.setState({ subject: e.target.value })
                          }}
                        />
                      </div>
                    </Col>

                  </Row>
                  <Row style={{ marginRight: 0, width: '90%' }} >
                    <Col xs={12} id='ww' >
                      <div id='area'>
                        <Textarea id='ereaheight'
                          name="textarea-1"
                          placeholder="Message" value={this.state.body} onChange={(e) => {
                            this.setState({ body: e.target.value })
                          }}
                        />
                      </div>

                    </Col></Row>
                  <Row style={{ marginRight: '0px', width: '100%', marginBottom: '5%' }} >
                    <Col xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                      <div id='BtnContactUSHome' onClick={() => this.send()}>Send</div>
                    </Col>
                  </Row>
                </div>

              </div>




              <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={2000}
                ContainerClassName="AnyClassForContainer"
                TransitionClassName="AnyClassForTransition"
                ToggledStyle={{}}
              />
               
              <Footer />
            </div>



          )




        }}
      </Context.Consumer>
    )
  }
}
export default withController(Contact);