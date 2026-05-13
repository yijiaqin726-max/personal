import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/noto-serif-sc/400.css';
import '@fontsource/noto-serif-sc/700.css';
import '@fontsource/ma-shan-zheng/400.css';
import '@fontsource/zcool-kuaile/400.css';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
