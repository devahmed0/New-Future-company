
import React, { Component } from 'react';
import Headertop from '../Headertop';
import Headermidel from '../Headermidel';
import Navmenu from '../Navmenu';
import Footer from '../Footer';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Background from "../../img/doc.png";
import laptop3 from "../../img/laptop3.png";
import shopping from "../../img/shopping.png";
import { Link } from "react-router-dom";
// import { Carousel ,RadioGroup ,Radio,Divider } from 'rsuite';
var rotated = false;
var rotated2 = false;

class Apps extends Component {
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
y.style.zIndex= '50';
y.style.left= 'auto';
rotated2 = !rotated2;

// if (e===4 || e===2  ) {
 
//   x.style.backgroundColor='#13516d'
//   x.style.height='100%'
//   x.style.zIndex='-1'
//   y.style.display='none'
// }else{
//   x.style.backgroundColor='unset'
//   x.style.height='unset'
//   x.style.zIndex='1'
//   y.style.display='flex'
// }
    
const mediaMatch = window.matchMedia('(max-width: 414)');
x.style.transformOrigin='50% 163%';
  }

  render() {
    const options = {
        loop: true,
        autoplay: false,
        animateOut: "slideOutDown",
        animateIn: "flipInX",
        dots: false,
        nav: true,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      };
    return (

      <div >
         <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
      <Navmenu />
      </div>
        <div   >
       
          <div id='tpbgimg'   >
            <svg  id='svg' viewBox="0 0 1440 181" xmlns='http://www.w3.org/2000/svg' preserveAspectRatio="none" style={{ height: 200, width: "100%" ,zIndex:'10'}} className='css-1d3w5wq' >
              <linearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='1543.491' y1='1474.8508' x2='2952.8528' y2='659.8721' >
                <stop offset='0' style={{ stopColor: '#131217' }} />
                <stop offset='1' style={{ stopColor: '#292A33' }} />
              </linearGradient>

              <path className='st0' style={{ fill: "#13516d", stroke: "#13516d", strokeWidth: 1, fillRule: 'nonzero' }} d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"   >
              </path>

            </svg>
            <div id='title_main_slide'  >CS CODE</div>
          </div>
          {/* <Carousel   wrap={false}  onSlide={(e) => {
            console.log(e);
            this.add(e)
          }} >
            
          </Carousel> */}

<div className="slider-area">
        <div className="tractor-main-slider">
          <OwlCarousel className="owl-carousel owl-theme" {...options}  onChanged={(e) => {
            console.log(e);
            this.add(e)
          }}   >
            <div className="tractor-single-slider  ">
            
            {/* <div style={{backgroundImage:`url(require("../../img/h-main-parallax-2.jpg"))`}} id='img2' /> */}
              <div className="tractor-single-table">
                <div className="tractor-single-tablecell">
                  <div className="container">
                    <div id='main_row_slide' >
                      <div id='first_col_slide'>
                        
                        <div id='font_slide'>
                          {/* tr<span>a</span>ct<span>o</span>ur <br /> */}
                          choice for industry
                        </div>
                        <p>
                          lorem ipsum dolor sit amt, consectet adop adipisicing
                          elit, sed do eiusmod
                          <br />
                          teporara incididunt ugt labore.
                        </p>
                        {/* <Link href="#" className="btn btn-type-1">
                          our services
                        </Link> */}
                        <Link href="#" className="btn btn-type-2">
                          purchase now
                        </Link>
               
                      </div>
                      <div id='main_bg_img'  >
              <img src={laptop3} id='img2'/>
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tractor-single-slider  ">
            {/* <img src={brand1} alt="logo"  className="img-fluid4" /> */}
         
              <div className="tractor-single-table">
                <div className="tractor-single-tablecell">
                  <div className="container">
                  <div id='main_row_slide' >
                      <div id='first_col_slide'>
                        <div id='font_slide'>
                          {/* tr<span>a</span>ct<span>o</span>ur <br /> */}
                          choice for industry
                        </div>
                        <p>
                          lorem ipsum dolor sit amt, consectet adop adipisicing
                          elit, sed do eiusmod
                          <br />
                          teporara incididunt ugt labore.
                        </p>
                    
                        <Link href="#" className="btn btn-type-2">
                          purchase now
                        </Link>
                      </div>
                      <div id='main_bg_img'  >
              <img src={shopping} id='img2' alt="logo"  />
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="tractor-single-slider  ">
            {/* <img src={brand1} alt="logo"  className="img-fluid4" /> */}
        
              <div className="tractor-single-table">
                <div className="tractor-single-tablecell">
                  <div className="container">
                  <div id='main_row_slide' >
                      <div id='first_col_slide'>
                        <div id='font_slide'>
                          {/* tr<span>a</span>ct<span>o</span>ur <br /> */}
                          choice for industry
                        </div>
                        <p>
                          lorem ipsum dolor sit amt, consectet adop adipisicing
                          elit, sed do eiusmod
                          <br />
                          teporara incididunt ugt labore.
                        </p>
                      
                        <Link href="#" className="btn btn-type-2">
                          purchase now
                        </Link>
                      </div>
                      <div id='main_bg_img'  >
              <img src={Background} id='img2' alt="logo"  />
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>



        </div>

<Footer />

      </div>
    );
  }
}
export default Apps;
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

