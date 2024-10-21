import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';

import {BrowserRouter, Route, Routes,  Link} from 'react-router-dom';

import Home from './components/home/Home';
import GlobalStyles from './components/styles/global.styled'

const theme = {
  colors: {
    primary: {
      main: '#795757'
    },
    secondary: {
      main: '#FFF0D1'
    },
    tertiary: {
      main: '#664343'
    },
    text: '#FFF0D1'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      </ThemeProvider>
  );
}

export default App;
