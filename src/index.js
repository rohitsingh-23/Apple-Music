import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TabContextProvider } from './context/TabContext';
import { initGA } from './ga';

initGA(process.env.REACT_APP_GA4_CODE);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TabContextProvider>
      <App />
    </TabContextProvider>
  </React.StrictMode>
);
