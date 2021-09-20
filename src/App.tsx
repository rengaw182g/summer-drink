import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';

const App:React.FC = () => {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
    <GlobalStyles/>
    </>
  );
}

export default App;
