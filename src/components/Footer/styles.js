import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    footer: {
    },
    footerHomePage: {
        backgroundColor: '#000'
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
    }
}));