import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Detail from '../pages/Detail';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
    return (
            <Switch>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/dashboard" exact component={Dashboard}></Route>
                <Route path="/detalhes/:idDrink+" component={Detail}></Route>
            </Switch>
    )
}

export default Routes;