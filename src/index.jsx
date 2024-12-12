import React from 'https://cdn.skypack.dev/react'; 
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import { BrowserRouter as Router } from "https://cdn.skypack.dev/react-router-dom@5.3.0";

import App from './App';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App /> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
