import { theme } from '../../components/Theme';
import rect1 from '../../img/rectangle1.png';
import rect5 from '../../img/rectangle5.png';
import rect5Pro from '../../img/rectangle5Pro.png';
import rect5Iphone from '../../img/rectangle5Iphone.png';


export const homepage = {
  rectangle1: {
    height: '8.75rem',
    width: '100%',
    backgroundImage: `url(${rect1})`,
    borderRadius: '0rem',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]:{
      justifyContent: 'center',
    },
  },
  rectangle5: {
    height: '34.375rem',
    width: '100%',
    backgroundImage: `url(${rect5})`,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '0rem',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]:{
      justifyContent: 'center',
      backgroundImage: `url(${rect5Pro})`,
    },
    [theme.breakpoints.down('sm')]:{
      justifyContent: 'center',
      backgroundImage: `url(${rect5Iphone})`,
    },

    '& img': {
      ml: '6.4rem',

      [theme.breakpoints.down('md')]:{
        ml: '0rem',
      },
    }

  },
  rectangle2: {
    width: '12.1rem',
    height: '5rem',
    border: '1px solid #FFFFFF',
    ml: '6.4rem',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',

    [theme.breakpoints.down('md')]:{
      ml: '0rem',
    },
    [theme.breakpoints.down('sm')]:{
      ml: '0rem',
      width: '6.75rem',
      height:'2.1rem'
    },
  },
  textCover: {
    my: '6.1rem',

  },
  text: {
    ml: '4.8rem',
    mr: '3.56rem', 

    [theme.breakpoints.down('md')]: {
      mx: '4.8rem'
    },

    [theme.breakpoints.down('sm')]: {
      ml: '1.75rem',
      mr:'1.6875rem'
    }
  },
  label: {
    ml: '4.8rem',
    [theme.breakpoints.down('sm')]: {
      ml:'1.75rem'
    }
  },
  card: {
    minWidth: '300px',
    minHeight: '300px',
    backgroundColor: '#000',
    color:'#FFFFFF',
    m: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width:'200px',
      height:'200px'
    }
  },
  cardCover: {
    
    // mx: '4.8rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    // overflowX: 'scroll'
  }
}