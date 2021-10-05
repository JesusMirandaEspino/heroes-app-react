import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import  { DashboardRoutes } from './DashboardRoutes';


// Detenida import { NavBar } from '../components/ui/NavBar';
import { LoginScreen } from '../components/login/LoginScreen';
// Detenida import { MarvelScreen } from '../components/Marvel/MarvelScreen';

export const AppRouter = () => {
    return (
    <Router>
        <div>
            <Switch>
                <Route  exact path="/login" component={ LoginScreen } />
                <Route  path="/" component={  DashboardRoutes  }   />
            </Switch>
        </div>

    </Router>
    )
}
