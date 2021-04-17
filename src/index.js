import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { VideoProvider, ThemeProvider } from './utils/store/providers';
import App from './components/App';
import './global.css';

ReactDOM.render(
  <StrictMode>
    <VideoProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </VideoProvider>
  </StrictMode>,
  document.getElementById('root')
);
