import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/mobile/image-hero.jpg'
import heroTabletImage from '../../assets/images/tablet/image-hero.jpg'
import heroDesktopImage from '../../assets/images/desktop/image-hero.jpg'

export const useStyles = makeStyles(theme => ({
    hero: {
        [theme.breakpoints.up('md')]: {
            backgroundImage: 'linear-gradient(to right, #000 50%, #FFF 50%)'
        }
    },
    heroImageContainer: {
        backgroundImage: `url(${heroImage})`,
        height: 250,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${heroTabletImage})`,
            height: 550,
            width: '60%'
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${heroDesktopImage})`,
            height: 550,
            marginLeft: '30%',
            width: '40%'
        }
    },
    heroContent: {
        padding: '1rem 5%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '-9%',
            padding: '1rem 5% 1rem 0',
            width: '40%'
        },
        [theme.breakpoints.up('md')]: {
            //marginLeft: '30%',
            width: '30%'
        }
    },
    heroContentTitle: {
        fontWeight: '900 !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.5rem !important'
        },
        [theme.breakpoints.up('md')]: {
            left: 0,
            transform: 'translate(-63%, 0)',
            top: '15%'
        }
    },
    heroContentButton: {
        '&:hover': {
            opacity: .8
        },
    },
    heroContentButtonText: {
        backgroundColor: '#000',
        cursor: 'pointer',
        padding: '0.95rem 1.5rem',
        fontSize: '1rem'
    },
    heroContentButtonIcon: {
        backgroundColor: '#D5966C',
        cursor: 'pointer',
        padding: '.95rem .95rem'
    },
    px: {
        paddingLeft: '5%',
        paddingRight: '5%',
        [theme.breakpoints.up(1000)]: {
            paddingLeft: '10%',
            paddingRight: '10%',
        }
    },
    dayAtGallery: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: 'row-reverse'
        }
    },
    galleryImageContainer: {
        [theme.breakpoints.up('sm')]: {
            height: 400,
            width: '55%'
        }
    },
    dayAtGalleryContent: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: '40%'
        }
    },
    dayAtGalleryTitle: {
        fontWeight: '900 !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.9rem !important'
        }
    },
    grid: {
        display: 'grid',
        gridRowGap: 30,
        gridTemplateColumns: '100%',
        gridTemplateRows: '350px 250px 250px',
        [theme.breakpoints.up('sm')]: {
            gridColumnGap: '2%',
            gridTemplateColumns: '59% 39%',
            gridTemplateRows: '250px 250px',
        }
    },
    gridItem3: {
        backgroundColor: '#000',
        padding: '2rem 7%'
    },
    greetingImageContainer1: {
        [theme.breakpoints.up('sm')]: {
            gridColumn: '1 / span 1',
            gridRow: '1 / span 2'
        }
    }
}));