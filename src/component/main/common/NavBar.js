import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { Link  } from 'react-router-dom'
import { Navbar  } from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';


const drawerWidth = '100%';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,


    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: 'flex',

  },
  drawerPaper: {
    width: drawerWidth,
    overflowY: 'visible',
    backgroundColor: '#000000c4',
    color: '#757575',
    height: '100%'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

   
        <div className={classes.root}>
          <CssBaseline />
          <AppBar id='ss'
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Navbar expand="lg" >
            <div style={{ width: 90 }} />
            <Link to='/'>
                 <img src={require('../../../assets/img/logo2.png')} alt='img' id='imgNavbar' />
                 </Link>
              <div
                onClick={handleDrawerOpen}
                style={{ cursor: 'pointer' }}
              >
                
             <img src={require('../../../assets/img/menu.png')} id='imgLeftNav' alt='img' />
              </div>
             
            
            



            </Navbar>


          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="top"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >


            <div >
              <div style={{ display: 'flex', width: '100%', flexDirection: 'row-reverse', paddingRight: '10px' }} >
                <IconButton onClick={handleDrawerClose} style={{ color: '#fff' }} >
                  {theme.direction === 'rtl' ? <CloseIcon style={{ color: '#fff', fontSize: 40 }} /> : <CloseIcon style={{ color: '#fff', fontSize: 40 }} />}
                </IconButton>
              </div>
              <div />

              <div id='mainDrawer' >
                <div id='mainDrawerItem' >
                 <div> <Link to='/Home'> Web </Link></div>
                 <div>  <Link to='/About'>About Us </Link> </div>
                 <div> <Link to='/Project'>Project </Link></div>
                <div> <Link to='/Contact'>Contact Us </Link></div>
                </div>

              </div>
            </div>



          </Drawer>

        </div>

      





   



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
