import classNames from 'classnames';
import { useStyles } from './styles';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles'
import { Typography } from '@mui/material';
import Footer from '../../components/Footer';


const Location = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <>
            <main>
                <section className={classNames(display.px, display.flex, display.flexColumn, classes.location,
                    responsive.smRow, display.justifyBetween, display.pb3, display.pt3)}>
                    <Typography component="h1" variant="h4"  className={classNames(classes.locationTitle, text.textLight)}>
                        Our location
                    </Typography>
                    <div className={classNames(display.mt2, responsive.smMt0, classes.locationContent)}>
                        <Typography component="h2" variant="h6" className={classNames(classes.locationSubTitle)}>
                            99 king street
                        </Typography>
                        <Typography  className={classNames(display.mt1, text.rem9, text.textLight, display.opacity9)}>
                            Newport<br/>RI 02840<br/>United States of America
                        </Typography>
                        <Typography component="address" className={classNames(display.mt1, text.rem9, text.textLight, display.opacity9)}>
                            Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
                        </Typography>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Location;