import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'; //para los estilos de bootstrap

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
