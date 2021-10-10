import React, { useMemo } from 'react';
import { useParams, Redirect  } from 'react-router-dom';
import {GetHeroesById } from '../../selectors/GetHeroesById';


export const HeroesScreen = ( { history } ) => {

    const { heroeid } = useParams();

    const hero = useMemo(() => GetHeroesById( heroeid ) , [heroeid ] );


    if( !hero ){
        return <Redirect to="/" />
    }


    const handleReturn = () => {

        if( history.length <= 2  ){
            history.push('/');
        }else{
            history.goBack();
        }



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
        <div  className="row mt-5  animate__animated animate__fadeIn" >

            <div className="col-4" >
                <img className="img-thumbnail"  src={ `../assets/img/${id}.jpg` }  alt={ superhero } />
            </div>  

            <div className="col-8" >
                <h3>{  superhero }</h3>

                    <ul className="list-group list-group-flush" >

                        <li className="list-group-item" > Alter Ego:  { alter_ego } </li>
                        <li className="list-group-item" > Publisher:  { publisher } </li>
                        <li className="list-group-item" > first Appearance:  { first_appearance} </li>

                    </ul>

                    <h5> Characters </h5>

                    <p> {  characters } </p>

                    <button onClick={ handleReturn }  className="btn btn-outline-primary">Return</button>

                    

            </div>

        </div>

    )
}
