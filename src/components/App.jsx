import React from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn.jsx';
import Messages from './Messages.jsx';
import Errors from './Errors.jsx';
import NavBar from './NavBar.jsx';

function App() {
    return (
        <React.Fragment>
            <Route path='/' component={NavBar} />
            <Route exact path='/' component={LogIn} />
            <Route exact path='/messages' component={Messages} />
            <Route path='/errorHandler' component={Errors} />
        </React.Fragment>
    );
}

export default App;
