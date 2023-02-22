import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from './components/ReponsiveAppBar';
import { Box } from '@mui/material';
import { Home } from './features/home';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <ResponsiveAppBar/>
        <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
        </BrowserRouter>
      </Box>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
