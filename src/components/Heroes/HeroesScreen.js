import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import {GetHeroesById } from '../../selectors/GetHeroesById';


export const HeroesScreen = () => {


    
    const { heroeid } = useParams();

    const hero = GetHeroesById( heroeid );

    console.log( hero );

    if( !hero ){
        return <Redirect to="/" />
    }


    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;


    return (
        <div>
            <h1>HeoresScreen</h1>
        </div>
    )
}
