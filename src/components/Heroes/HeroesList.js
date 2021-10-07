import React from 'react'
import { GetHeroesByPublisher } from '../../selectors/GetHeroesByPublisher';
import { HeroesCard } from './HeroesCard';

export const HeroesList = ( { publisher } ) => {

    const heroes = GetHeroesByPublisher( publisher );

    return (
        <div  className="card-columns ">
            {
                heroes.map( hero => (
                    <HeroesCard key={hero.id}
                        { ...hero }/>
                    
                ))
            }
        </div>
    )
}
