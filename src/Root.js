import React from 'react';
import App from './components/App';
import { BrowserRouter, HashRouter } from 'react-router-dom';



const Root = () => {
    return (
        <BrowserRouter >
          <App  />
        </BrowserRouter>
    );
  };

  export default Root;
