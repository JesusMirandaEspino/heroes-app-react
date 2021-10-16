import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import  { DashboardRoutes } from './DashboardRoutes';


// Detenida import { NavBar } from '../components/ui/NavBar';
import { LoginScreen } from '../components/login/LoginScreen';
// Detenida import { MarvelScreen } from '../components/Marvel/MarvelScreen';

import { PrivateRouter } from '../routers/PrivateRouter';
import { PublicRoute } from '../routers/PublicRoute';
import { authContext } from '../auth/authContext';


export const AppRouter = () => {

    const { user } = useContext( authContext );

    return (
    <Router>
        <div  >
            <Switch>
                <PublicRoute  exact path="/login" component={ LoginScreen }  isAuthenticated={ user.logged } />
                <PrivateRouter  path="/" component={  DashboardRoutes  } isAuthenticated={ user.logged }  />
            </Switch>
        </div>

    </Router>
    )
}
