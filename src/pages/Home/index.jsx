import classNames from 'classnames';
import { useStyles } from './styles';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles'
import { Hidden, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import yourDayAtGalleryImage from '../../assets/images/mobile/image-grid-1.jpg'
import greetingImage1 from '../../assets/images/mobile/image-grid-2.jpg'
import greetingImage2 from '../../assets/images/mobile/image-grid-3.jpg'

import yourDayAtGalleryTabletImage from '../../assets/images/tablet/image-grid-1.jpg'
import greetingTabletImage1 from '../../assets/images/tablet/image-grid-2.jpg'
import greetingTabletImage2 from '../../assets/images/tablet/image-grid-3.jpg'

import yourDayAtGalleryDesktopImage from '../../assets/images/desktop/image-grid-1.jpg'
import greetingDesktopImage1 from '../../assets/images/desktop/image-grid-2.jpg'
import greetingDesktopImage2 from '../../assets/images/desktop/image-grid-3.jpg'

const Home = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    const Image = ({ alt, image, containerClassName }) => {
        return (
            <div className={classNames(containerClassName)}>
                <img 
                    src={image}
                    alt={alt}
                    className={classNames(display.block, display.h100, display.w100)}
                />
            </div>
        )
    };

    return (
       <>
            <section className={classNames(display.alignStretch, display.flex, display.flexColumn, display.w100,
                responsive.smRow, responsive.smAlignCenter, classes.hero)}>
                <div className={classNames(bg.cover, bg.center, classes.heroImageContainer, display.relative)}>
                    <Hidden mdDown>
                        <Typography component="h1" variant="h4" className={classNames(classes.heroContentTitle, 
                            text.uppercase, text.textLight, display.absolute)}>
                            Modern<br/>art gal<span className={classNames(text.textDark)}>lery</span>
                        </Typography>
                    </Hidden>
                </div>
                <div className={classNames(classes.heroContent, display.relative)}>
                    <Hidden mdUp>
                        <Typography component="h1" variant="h4" className={classNames(classes.heroContentTitle, text.uppercase)}>
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
            <section className={classNames(classes.dayAtGallery, display.justifyBetween, display.alignCenter,
                responsive.smMt3, classes.px, display.pb2, display.pt2)}>
                <Hidden smUp>
                    <Image 
                        alt="your day at the gallery"
                        containerClassName={classes.galleryImageContainer}
                        image={yourDayAtGalleryImage}
                    />
                </Hidden>
                <Hidden smDown mdUp>
                    <Image 
                        alt="your day at the gallery"
                        containerClassName={classes.galleryImageContainer}
                        image={yourDayAtGalleryTabletImage}
                    />
                </Hidden>
                <Hidden mdDown>
                    <Image 
                        alt="your day at the gallery"
                        containerClassName={classes.galleryImageContainer}
                        image={yourDayAtGalleryDesktopImage}
                    />
                </Hidden>
                <div className={classNames(display.pt1, classes.dayAtGalleryContent)}>
                    <Typography component="h2" variant="h5" className={classNames(classes.dayAtGalleryTitle, text.uppercase)}>
                        Your Day<br/>at the Gallery
                    </Typography>
                    <Typography  className={classNames(text.rem9, display.mt1, 
                        responsive.mdMt0)}>
                        Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
                    </Typography>
                </div>
            </section>
            <section className={classNames(classes.px, classes.grid, display.mb3)}>
                <Hidden smUp>
                    <Image 
                        alt=""
                        containerClassName={classes.greetingImageContainer1}
                        image={greetingImage1}
                    />
                </Hidden>
                <Hidden smDown mdUp>
                    <Image 
                        alt=""
                        containerClassName={classes.greetingImageContainer1}
                        image={greetingTabletImage1}
                    />
                </Hidden>
                <Hidden mdDown>
                    <Image 
                        alt=""
                        containerClassName={classes.greetingImageContainer1}
                        image={greetingDesktopImage1}
                    />
                </Hidden>
                <Hidden smUp>
                    <Image 
                        alt=""
                        containerClassName={classes.greetingImageContainer2}
                        image={greetingImage2}
                    />
                </Hidden>
                <Hidden smDown mdUp>
                    <Image 
                        alt=""
                        containerClassName={classes.greetingImageContainer2}
                        image={greetingTabletImage2}
                    />
                </Hidden>
                <Hidden mdDown>
                    <Image 
                        alt=""
                        containerClassName={classes.greetingImageContainer2}
                        image={greetingDesktopImage2}
                    />
                </Hidden>
                <div className={classNames(classes.gridItem3, display.flex, display.flexColumn,
                    display.justifyCenter)}>
                    <Typography component="h2" variant="h5" className={classNames(classes.dayAtGalleryTitle, text.uppercase, text.textLight)}>
                        Come &amp; be<br/>inspired
                    </Typography>
                    <Typography  className={classNames(text.textLight, text.rem9, display.mt1, display.opacity9,
                        responsive.mdMt0)}>
                        Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
                    </Typography>
                </div>
            </section>
       </>
    )
};

export default Home;