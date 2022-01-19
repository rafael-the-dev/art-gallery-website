import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles(theme => ({
    mapContainer: {
        height: 450,
        [theme.breakpoints.up('sm')]: {
            height: 400,
        }
    },
    backToHomeLink: {
        left: '5%',
        top: 0,
        zIndex: 1000,
        '&:hover': {
            opacity: .8
        },
        [theme.breakpoints.up(1000)]: {
            left: '10%',
        }
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
    location: {
        backgroundColor: '#000'
    },
    locationContent: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: '60%'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '50%'
        }
    },
    locationTitle: {
        fontSize: '2.45rem !important',
        fontWeight: '900 !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.7rem !important',
            width: 224
        }
    },
    locationSubTitle: {
        color: '#D5966C',
        fontSize: '1.8rem !important'
    }
}));