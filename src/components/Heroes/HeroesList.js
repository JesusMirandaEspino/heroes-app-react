import React from 'react'
import { GetHeroesByPublisher } from '../../selectors/GetHeroesByPublisher';

export const HeroesList = ( { publisher } ) => {

    const heroes = GetHeroesByPublisher( publisher );

    return (
        <ul>
            {
                heroes.map( hero => (
                    <li key={hero.id} >
                        { hero.superhero }
                    </li>
                ))
            }
        </ul>
    )
}
