require('./assets/stylesheets/styles.scss');

//import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
//main app component
import App from 'components/mainApp/App.jsx';
//render our App componnet and mount it to our #root element
ReactDOM.render(<App />, document.getElementById('root'));