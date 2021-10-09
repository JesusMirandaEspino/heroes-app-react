import React, { useMemo }  from 'react'
import { GetHeroesByPublisher } from '../../selectors/GetHeroesByPublisher';
import { HeroesCard } from './HeroesCard';

export const HeroesList = ( { publisher } ) => {


    const heroes = useMemo( () => GetHeroesByPublisher( publisher ) , [  publisher ])


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
