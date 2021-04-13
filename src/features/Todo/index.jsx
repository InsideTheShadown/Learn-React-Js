import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import NotFound from '../../components/NotFound';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <Switch>
            <Route path={`${match.path}`} component={ListPage} exact/>
                {/* <Route path={match.path} component={ListPage} exact/> */}
                <Route path = {`${match.path}/:todoId`} component={DetailPage} exact/>
                {/* <Route component={NotFound}/> */}
            </Switch>
        </div>
    );
}

export default TodoFeature;