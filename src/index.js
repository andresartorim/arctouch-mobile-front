import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Craze from './components/Craze/Craze';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Craze />, document.getElementById('root'));
registerServiceWorker();
