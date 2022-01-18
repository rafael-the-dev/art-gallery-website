import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import classNames from 'classnames';
import { useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles';
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = ({ isHomePage }) => {
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <footer className={classNames(display.flex, display.flexColumn, display.justifyBetween, 
            classes.footer, display.px, display.pb3, display.pt3, {[classes.footerHomePage]: isHomePage },
            responsive.smRow, responsive.smAlignStart)}>
            <div className={classNames(classes.footerContent)}>
                <Typography 
                    variant="h4" 
                    component={Link} 
                    to="/" 
                    className={classNames({[text.textLight]: isHomePage}, text.noUnderline, classes.footerTitle)}>
                    Modern<br/>art gallery
                </Typography>
                <Typography className={classNames(text.rem9, display.mt1, display.opacity9, 
                    {[text.textLight]: isHomePage}, responsive.mdMl2, classes.footerDescription)}>
                    The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
                </Typography>
            </div>
            <ul className={classNames(display.flex, display.alignCenter, display.mt2, responsive.smMt0)}>
                <li className={classNames(display.mr1)}>
                    <FacebookIcon className={classNames({[text.textLight]: isHomePage})} />
                </li>
                <li className={classNames(display.mr1)}>
                    <InstagramIcon className={classNames({[text.textLight]: isHomePage})} />
                </li>
                <li className={classNames()}>
                    <TwitterIcon className={classNames({[text.textLight]: isHomePage})} />
                </li>
            </ul>
        </footer>
    )
};

export default Footer;