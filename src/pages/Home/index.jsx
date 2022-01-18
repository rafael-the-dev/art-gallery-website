import classNames from 'classnames';
import { useStyles } from './styles';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles'
import { Hidden, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    return (
       <>
            <section className={classNames(display.alignStretch, display.flex, display.flexColumn, display.w100,
                responsive.smRow, responsive.smAlignCenter, classes.hero)}>
                <div className={classNames(bg.cover, bg.center, classes.heroImageContainer, display.relative)}>
                    <Hidden mdDown>
                        <Typography component="h1" variant="h3" className={classNames(classes.heroContentTitle, 
                            text.uppercase, text.textLight, display.absolute)}>
                            Modern<br/>art gal<span className={classNames(text.textDark)}>lery</span>
                        </Typography>
                    </Hidden>
                </div>
                <div className={classNames(classes.heroContent, display.relative)}>
                    <Hidden mdUp>
                        <Typography component="h1" variant="h3" className={classNames(classes.heroContentTitle, text.uppercase)}>
                            Modern<br/>art gallery
                        </Typography>
                    </Hidden>
                    <Typography  className={classNames(classes.heroContentDescription, text.rem9, display.mt2, 
                        responsive.mdMt0)}>
                        The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.
                    </Typography>
                    <button className={classNames(classes.heroContentButton, display.flex, display.alignStretch,
                        display.outlineNone, display.borderNone, bg.transparent, display.mt1)}>
                        <span className={classNames(classes.heroContentButtonText, text.textLight, text.uppercase,
                            display.flex, display.alignCenter)}>
                            Our location
                        </span>
                        <span className={classNames(classes.heroContentButtonIcon)}>
                            <ArrowForwardIosIcon className={classNames(text.textLight)} />
                        </span>
                    </button>
                </div>
            </section>
       </>
    )
};

export default Home;