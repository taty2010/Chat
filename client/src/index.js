import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDom from 'react-dom';
import './index.scss'

import App from './App';

ReactDom.render(<App/>, document.getElementById('root'));