
import React, { Component } from 'react';
import { Carousel , Row, Col} from 'react-bootstrap';
import NavBar from '../common/NavBar';
import { TextInput, Textarea } from 'evergreen-ui';
// import { Carousel ,RadioGroup ,Radio,Divider } from 'rsuite';
var rotated = false;
var rotated2 = false;

class Main extends Component {
  state = {
    open: true,
  }

  add(e) {

  var x = document.getElementById('tpbgimg'),
  angle = rotated ? 0 : 180;
x.style.transform = 'rotate(' + angle + 'deg)';
x.style.backfaceVisibility ='hidden';
x.style.transformStyle='preserve-3d';
x.style.transformOrigin='50% 160%';
x.style.transition='1s .2s cubic-bezier(.88,.17,0,.99)';
x.style.willChange='transform';
x.style.position= 'absolute';
// x.style.top= '50%';
x.style.left= 'auto';
rotated = !rotated;

var y = document.getElementById('title_main_slide'),
angle = rotated2 ? 0 : 180;
y.style.transform = 'rotate(' + angle + 'deg)';
y.style.backfaceVisibility ='hidden';
y.style.transformStyle='preserve-3d';
y.style.transformOrigin='50% 70%';
y.style.transition='1s .2s cubic-bezier(.88,.17,0,.99)';
y.style.willChange='transform';
y.style.position= 'absolute';
// y.style.top= '50%';
y.style.left= 'auto';
rotated2 = !rotated2;

if (e===4 || e===2  ) {
 
  x.style.backgroundColor='#13516d'
  x.style.height='100%'
  x.style.zIndex='-1'
  y.style.display='none'
}else{
  x.style.backgroundColor='unset'
  x.style.height='unset'
  x.style.zIndex='1'
  y.style.display='flex'
}
    
 
 
  }

  render() {
    return (

      <div>

        <div  >
          <NavBar />
          <div id='tpbgimg'   >
            <svg  id='svg' viewBox="0 0 1440 181" xmlns='http://www.w3.org/2000/svg' preserveAspectRatio="none" style={{ height: 200, width: "100%" ,zIndex:'-1'}} className='css-1d3w5wq' >
              <linearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='1543.491' y1='1474.8508' x2='2952.8528' y2='659.8721' >
                <stop offset='0' style={{ stopColor: '#131217' }} />
                <stop offset='1' style={{ stopColor: '#292A33' }} />
              </linearGradient>

              <path className='st0' style={{ fill: "#13516d", stroke: "#13516d", strokeWidth: 1, fillRule: 'nonzero' }} d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"   >
              </path>

            </svg>
            <div id='title_main_slide'  >CS CODE</div>
          </div>
          <Carousel   wrap={false}  onSlide={(e) => {
            console.log(e);
            this.add(e)
          }} >
            <Carousel.Item   >
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',flexDirection:'row-reverse'}} id='slide_main1' >
            <img src={require('../../../assets/img/laptop3.png')} alt='img' id='main_slide_img' ></img>
            <div className='tp-caption'>
                      <a>

                        <div className='tp-linesplit'>
                          <div className='tp-wordsplit'>
                            <div className='tp-charsplit'>
                           U
                          </div>
                            <div className='tp-charsplit1'>
                             I
                          </div>
                            <div className='tp-charsplit' style={{padding:'0 5px 0 5px'}} >
                           
                              /
                          </div>
                            <div className='tp-charsplit1'>
                             U 
                          </div>
                            <div className='tp-charsplit'>
                             X
                          </div>
                            <div className='tp-charsplit1' style={{padding:'0 5px 0 5px'}} >
                            /  
                          </div>
                            <div className='tp-charsplit'>
                               D
                          </div>
                            <div className='tp-charsplit1'>
                             E
                          </div>
                            <div className='tp-charsplit'>
                            V
                          </div>
                          <div className='tp-charsplit1'>
                             E
                          </div>
                          <div className='tp-charsplit'>
                            L
                          </div>
                          <div className='tp-charsplit1'>
                             O
                          </div>
                          <div className='tp-charsplit'>
                            P
                          </div>
                          <div className='tp-charsplit1'>
                             M
                          </div>
                          <div className='tp-charsplit'>
                            E
                          </div>
                          <div className='tp-charsplit1'>
                             N
                          </div>
                          <div className='tp-charsplit'>
                            T
                          </div>
                          </div>
                        </div>

                      </a>
                    </div>              
              </div>  
           
            
            </Carousel.Item>
            <Carousel.Item  >
              <div id='slotholder' >
                <div id='tpbgimg1' ></div>
              </div>          
              <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0,zIndex:0 }} >
                <div className='tp-loop-wrap'>
                  <div className='tp-mask-wrap'>
                    <div className='tp-caption'>
                    <img src={require('../../../assets/img/hotel.png')} alt='img' id='img_slid_hotel'  />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item  >
              <div id='slotholder' >
                <div id='tpbgimg2' ></div>
              </div>          
              <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0,zIndex:0 }} >
                <div className='tp-loop-wrap'>
                  <div className='tp-mask-wrap'>
                    <div className='tp-caption'>
                    <img src={require('../../../assets/img/doc.png')} alt='img' id='img_slid_doc'  />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item  >
              <div id='slotholder' >
                <div id='tpbgimg3' ></div>
              </div>          
              <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
                <div className='tp-loop-wrap'>
                  <div className='tp-mask-wrap'>
                    <div className='tp-caption'>
                    <img src={require('../../../assets/img/shopping.png')} alt='img' id='img_slid_hotel'  />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div id='contact_main_slide'  >
                              
                <div id='contactMainForm_slide'>
                <Row style={{ marginRight: 0, width: '90%', paddingTop: '3%' }} >
                    <Col>
                      <div >
                        <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: '30px', color: 'rgb(127 31 138)' }}>For More Inquiry Please Send as Email:</p>

                      </div>
                    </Col>
                  </Row>
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
            </Carousel.Item>
          </Carousel>





        </div>



      </div>
    );
  }
}
export default Main;
// const styles = {
//   radioGroupLabel: {
//     padding: '8px 12px',
//     display: 'inline-block',
//     verticalAlign: 'middle'
//   }
 
// };

// function add(e) {

//       var x = document.getElementById('tpbgimg'),
//         angle = rotated ? 0 : 180;
//       x.style.transform = 'rotate(' + angle + 'deg)';
//       x.style.backfaceVisibility ='hidden';
//       x.style.transformStyle='preserve-3d';
//       x.style.transformOrigin='50% 160%';
//       x.style.transition='1s .2s cubic-bezier(.88,.17,0,.99)';
//       x.style.willChange='transform';
//       x.style.position= 'absolute';
//       // x.style.top= '50%';
//       x.style.left= 'auto';
//       rotated = !rotated;
      
//       var y = document.getElementById('title_main_slide'),
//       angle = rotated2 ? 0 : 180;
//     y.style.transform = 'rotate(' + angle + 'deg)';
//     y.style.backfaceVisibility ='hidden';
//     y.style.transformStyle='preserve-3d';
//     y.style.transformOrigin='50% 90%';
//     y.style.transition='1s .2s cubic-bezier(.88,.17,0,.99)';
//     y.style.willChange='transform';
//     y.style.position= 'absolute';
//     // y.style.top= '50%';
//     y.style.left= 'auto';
//     rotated2 = !rotated2;
   
//     }


// export default function Main() {
//   const [placement, setPlacement] = React.useState('Right');
//   const [shape, setShape] = React.useState('dot');
//   return (
//     <div>
//        <div id='tpbgimg'   >
//             <svg id='svg' viewBox="0 0 1440 181" xmlns='http://www.w3.org/2000/svg' preserveAspectRatio="none" style={{ height: 200, width: "100%" }} className='css-1d3w5wq' >
//               <linearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='1543.491' y1='1474.8508' x2='2952.8528' y2='659.8721' >
//                 <stop offset='0' style={{ stopColor: '#131217' }} />
//                 <stop offset='1' style={{ stopColor: '#292A33' }} />
//               </linearGradient>

//               <path className='st0' style={{ fill: "#0a2861", stroke: "#0a2861", strokeWidth: 1, fillRule: 'nonzero' }} d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"   >
//               </path>

//             </svg>
//             <div id='title_main_slide'  >CS CODE</div>
//           </div>
//       <Carousel key={`${'Right'}.${'dot'}`} placement={'Right'} shape={'dot'} id='slide_main1' style={{display:'flex'}}
//       onChange={(e) => {
//                     console.log('s');
//                      add(e)
//                   }} >
    
//    <div>
          
//           <img src={require('../../../assets/img/ready-to-use-website-premium-icon.svg')}  />
//                </div>

//                <div>
          
//                <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
//                  <div className='tp-loop-wrap'>
//                    <div className='tp-mask-wrap'>
//                      <div className='tp-caption'>
//                        <a>
//                          <span />
//                        </a>
//                      </div>
//                    </div>
//                  </div>
//                </div>
//                </div>
//       </Carousel>
//     </div>
//   );
// }

