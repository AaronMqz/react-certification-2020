import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { VideoProvider, ThemeProvider, AuthProvider } from './utils/store/providers';
import App from './components/App';
import './global.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <VideoProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </VideoProvider>
    </AuthProvider>
  </StrictMode>,
  document.getElementById('root')
);
