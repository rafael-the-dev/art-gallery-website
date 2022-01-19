import classNames from 'classnames';
import { useStyles } from './styles';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles'
import { Typography } from '@mui/material';
import Footer from '../../components/Footer';
//import * as leaflet from 'leaflet'
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom'
import { useCallback, useEffect } from 'react';
import { useState } from 'react';


const Location = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();
    const [ map, setMap ] = useState('');

    const getMap = useCallback((geo) => {
        return (
            <MapContainer style={{ height: '100%', width: '100%' }} center={geo} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={geo}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        )
    }, [])

    const fetchUserLocation = useCallback(() => {
        fetch('https://get.geojs.io/v1/ip/geo.json')
            .then(res => res.json())
            .then(data => {
                setMap(getMap([parseFloat(data.latitude), parseFloat(data.longitude)]));
            })
            .catch(error => {
                alert('Error while getting your location, refresh the page to try again');
                setMap(getMap([41.490578, -71.310196]))
                console.log(error);
            });
    }, [ getMap ])

    useEffect(() => {
        fetchUserLocation()
    }, [ fetchUserLocation ])

    return (
        <>
            <main>
                <div className={classNames(classes.mapContainer)}>
                    { map }
                </div>
                <Link to="/" className={classNames(text.noUnderline, display.absolute, classes.backToHomeLink)}>
                    <button className={classNames(classes.heroContentButton, display.flex, display.alignStretch,
                        display.outlineNone, display.borderNone, bg.transparent)}>
                        <span className={classNames(classes.heroContentButtonIcon)}>
                            <ArrowBackIosIcon className={classNames(text.textLight)} />
                        </span>
                        <span className={classNames(classes.heroContentButtonText, text.textLight, text.uppercase,
                            display.flex, display.alignCenter)}>
                            Back to home
                        </span>
                    </button>
                </Link>
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