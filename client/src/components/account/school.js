import React from 'react';
import { Route, Switch } from 'react-router';    
import SchoolInfo from './schoolInfo';
import SchoolPersonal from './schoolPersonal';
import SchoolStatus from './schoolStatus';

export const SchoolAccount = () => {
    return (
        <Switch>
            <Route exact path="/" component={ SchoolPersonal }/>
            <Route path="/account/info" component={ SchoolInfo } />
            <Route path="/account/status" component={ SchoolStatus } />
        </Switch>
    )
};

