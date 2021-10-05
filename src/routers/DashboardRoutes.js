import React from 'react'
import { NavBar } from '../components/ui/NavBar';
import { Route, Switch } from 'react-router';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { HeroesScreen } from '../components/Heroes/HeroesScreen';
import { DcScreen } from '../components/DC/DcScreen';

export const DashboardRoutes = () => {
    return (
        <div>

            <NavBar />


            <div>

                <Switch>

                    <Route  exact path="/marvel" component={ MarvelScreen } />
                    <Route  exact path="/heroe:heroeid" component={ HeroesScreen } />
                    <Route  exact path="/dc" component={ DcScreen } />
                
                </Switch>

            </div>

            
        </div>
    )
}
