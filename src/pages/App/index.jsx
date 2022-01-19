import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { AppContextProvider } from '../../context/AppContext';
import loadable from '@loadable/component';

const App = () => {
    const theme = createTheme({
        typography: {
            /*fontFamily: "Big Shoulders Display"/*[
                '"Abril Fatface"', 'cursive', '"Big Shoulders Display"', '"Big Shoulders Text"', '"Mochiy Pop P One"', 'sans-serif'
            ].join(',')*/
        }
    });
    const LocationPage = loadable(() => import(/* webpackChunkName: "LocationPage" */ '../Location'));
    const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */ '../Home'));

    return (
        <>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <AppContextProvider>
                        <Router>
                            <Routes>
                                <Route exact path="/location" element={<LocationPage />} />
                                <Route exact path="/" element={<HomePage />} />
                            </Routes>
                        </Router>
                    </AppContextProvider>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
};

export default App;