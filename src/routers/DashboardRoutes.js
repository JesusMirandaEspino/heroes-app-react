import React from 'react'
import { NavBar } from '../components/ui/NavBar';
import { Redirect, Route, Switch } from 'react-router';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { HeroesScreen } from '../components/Heroes/HeroesScreen';
import { DcScreen } from '../components/DC/DcScreen';
import { SearchScreen } from '../components/Search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <div>

            <NavBar />


            <div className="container mt-5" >

                <Switch>

                    <Route  exact path="/marvel" component={ MarvelScreen } />
                    <Route  exact path="/hero/:heroeid" component={ HeroesScreen } />
                    <Route  exact path="/dc" component={ DcScreen } />
                    <Route  exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel"  />
                
                </Switch>

            </div>

            
        </div>
    )
}
