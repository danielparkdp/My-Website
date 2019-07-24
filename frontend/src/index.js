import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {isChrome, isFirefox, isMobile} from "react-device-detect";

 if(isMobile) {
     ReactDOM.render( <div className={"mobile-error"}>
             Visit danielpark.info on your computer! You'll see why :)
         </div>, document.getElementById('root'));
} else if (!isFirefox && !isChrome) {
         ReactDOM.render( <div className={"browser-unsupported-error"}>
             Please check out my site on Firefox
             or Chrome! React acts up in Safari...
         </div>, document.getElementById('root'));

 } else {
     ReactDOM.render(<App />, document.getElementById('root'));

 }



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
