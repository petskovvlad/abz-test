import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

import './index.scss';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);
root.render(<App />);
