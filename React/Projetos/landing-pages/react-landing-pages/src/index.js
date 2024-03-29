import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './templates/App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global/styles/globalStyles';
import { ThemeStateProvider } from './contexts/ThemeStateContext';
import { AppRoutes } from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeStateProvider>
            <AppRoutes />
        </ThemeStateProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
