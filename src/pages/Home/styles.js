import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/mobile/image-hero.jpg'

export const useStyles = makeStyles(theme => ({
    heroImageContainer: {
        backgroundImage: `url(${heroImage})`,
        height: 250
    },
    heroContent: {
        padding: '1rem 5%'
    },
    heroContentTitle: {
        fontWeight: '900 !important'
    },
    heroContentButtonText: {
        backgroundColor: '#000',
        padding: '0.95rem 1.5rem',
        fontSize: '1rem'
    },
    heroContentButtonIcon: {
        backgroundColor: '#D5966C',
        padding: '.95rem .95rem'
    }
}));