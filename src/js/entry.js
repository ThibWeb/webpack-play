// Does it still make sense to separate JS & CSS?
import '../css/style.css';

import React from 'react';
import App from './app';

React.render(<App/>, document.getElementById('mount'));
