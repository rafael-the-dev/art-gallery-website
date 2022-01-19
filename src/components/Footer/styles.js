import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#D5966C'
    },
    footerHomePage: {
        backgroundColor: '#000 !important'
    },
    footerContent: {
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    footerTitle: {
        fontWeight: '900 !important'
    },
    footerDescription: {
        [theme.breakpoints.up('md')]: {
            width: 296
        },
        [theme.breakpoints.up(1050)]: {
            marginLeft: '4rem !important'
        }
    },
    footerIcon: {
        cursor: 'pointer',
        '&:hover': {
            opacity: .8
        }
    }
}));