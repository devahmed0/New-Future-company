import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Context from '../../../assets/js/context';
import Drawer from '@material-ui/core/Drawer';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    flexGrow: 1,
    backgroundColor: '#221a1c',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    paddingLeft: 0,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 60,
    },
  },
  MenuBTNNavContiner: {
    flexGrow: 0.3,
    display: 'none',
    fontSize: 18,
    fontWeight: 400,
    cursor: 'pointer',
    width: '50%',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',

    },

  },

  spann: {
    '&:hover': {
      color: '#d37541',
      transitionDuration: '.3s',
      transitionTimingFunction: 'linear',
      // textAlign:'center'
    },
  }

}));



function SearchAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  return (
    <Context.Consumer>
      {ctx => {
        return (
          <div className={classes.root}>
            <AppBar position="static" className='ss'>
              <Toolbar>
                <div onClick={toggleDrawer('left', true)}>    <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
                </div>

                <SwipeableDrawer
                  open={state.left}
                  onClose={toggleDrawer('left', false)}
                  onOpen={toggleDrawer('left', true)}
                >
                  {/* {sideList('left')} */}
                </SwipeableDrawer>
                <SwipeableDrawer
                  anchor="top"
                  open={state.top}
                  onClose={toggleDrawer('top', false)}
                  onOpen={toggleDrawer('top', true)}
                >
                  {/* {fullList('top')} */}
                </SwipeableDrawer>

                <Typography className={classes.title} noWrap>
                  {/* <Link to='/'>
                    <img src={require('../../../assets/img/Untitled-1.png')} style={{ height: '80px' }} id='logo_img' alt='img' /> 
                     </Link> */}
                </Typography>


                <article className={classes.MenuBTNNavContiner}>
                  <span className={classes.spann} id='abou_sh' > <Link to='/'>
                    {ctx.value.Lang === 'en' ? <span> Home</span> : <span>الرئيسية</span>}
                  </Link>   </span>
                  <span className={classes.spann} id='abou_sh' > <Link to='/#'>
                    {ctx.value.Lang === 'en' ? <span> About Us </span> : <span>عن الشركة</span>}
                  </Link>   </span>
                  <span className={classes.spann} id='abou_sh'> <Link to='/#'>
                    {ctx.value.Lang === 'en' ? <span>Our Works</span> : <span>المنتجات</span>}
                  </Link>  </span>
                  <span className={classes.spann} id='abou_sh' ><Link to='/#' >
                    {ctx.value.Lang === 'en' ? <span>Contact Us</span> : <span>تواصل معنا</span>}
                  </Link>  </span>
                  {/* <div className="dropdown" id='abou_sh' >
                    {ctx.value.Lang === 'en' ? <span>language</span> : <span>اللغة</span>}

                    <div className="dropdown-content">
                      <div id='Bt_link' onClick={() => {
                        localStorage.setItem('Lang', 'ar')
                        window.location.reload()
                      }} >   Arabic  </div>
                      <div id='Bt_link' onClick={() => {
                        localStorage.setItem('Lang', 'en')
                        window.location.reload()
                      }} >    English  </div>

                    </div>

                  </div> */}
                  <span className={classes.spann}>
                    {(cookies.get("auth") === 'lgoin') ? (
                      <span className={classes.spann} id='abou_sh' > <Link to='/Orders'>
                        {ctx.value.Lang === 'en' ? <span> Dashboard </span> : <span>لوحة التحكم</span>}
                      </Link>   </span>
                    ) : (
                      null)}
                  </span>
                </article>
              </Toolbar>


              <React.Fragment >
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                  <div style={{ backgroundColor: '#221a1c', minHeight: '100%' }}
                    className={classes.list}
                    role="presentation"
               
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5%', paddingBottom: '5%' }}  >
                      {/* <img src={require('../../../assets/img/Untitled-1.png')} style={{ height: 100, marginTop: '12%', borderRadius: 300 }} alt='img' />  */}
                    </div>
                    <Link to='/'>    <List style={{ marginTop: '15%' }} >
                      {['Home'].map((text, index) => (
                        <ListItem button key={text}>
                          <ListItemIcon>{index % 2 === 0 ? <HomeIcon className='side_text' /> : <HomeIcon className='side_text' />}</ListItemIcon>
                          <ListItemText primary={text} className='side_text' />
                        </ListItem>
                      ))}
                    </List> </Link>
                    <Divider />
                    <Link to='/About'>   <List>
                      {['About Us'].map((text, index) => (
                        <ListItem button key={text}>
                          <ListItemIcon>{index % 2 === 0 ? <InfoIcon className='side_text' /> : <InfoIcon className='side_text' />}</ListItemIcon>
                          <ListItemText primary={text} className='side_text' />
                        </ListItem>
                      ))}
                    </List> </Link>
                    <Divider />
                    <Link to='/Contact'>
                      <List>
                        {['Contact Us'].map((text, index) => (
                          <ListItem button key={text}>
                            <ListItemIcon  >{index % 2 === 0 ? <ContactPhoneIcon className='side_text' /> : <ContactPhoneIcon className='side_text' />}</ListItemIcon>
                            <ListItemText primary={text} className='side_text' />
                          </ListItem>
                        ))}
                      </List>
                    </Link>
                    <Divider />
                  </div>
                </Drawer>
              </React.Fragment>
            </AppBar>
          </div>

        )
      }}
    </Context.Consumer>



  );
}
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {

    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {

      // Call our function and pass any params we received
      fn(...params);
    });

  }
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();
export default SearchAppBar;