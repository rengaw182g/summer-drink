import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Detail from '../pages/Detail';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route path="/detalhes/:id" component={Detail}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;