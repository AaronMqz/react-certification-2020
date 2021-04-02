import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { VideoProvider } from './utils/store/providers';
import App from './components/App';
import './global.css';

ReactDOM.render(
  <StrictMode>
    <VideoProvider>
      <App />
    </VideoProvider>
  </StrictMode>,
  document.getElementById('root')
);
