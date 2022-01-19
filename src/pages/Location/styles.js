import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles(theme => ({
    location: {
        backgroundColor: '#000'
    },
    locationContent: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: '60%'
        },
        [theme.breakpoints.up('sm')]: {
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