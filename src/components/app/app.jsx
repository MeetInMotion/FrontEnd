import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';

class App extends React.Component{
    render () {
        return (
            <div styleName='mystyle'>Hello world!</div>
        );
    }
}

export default CSSModules(App, styles);
 
