import React from 'react'
import queryString from 'query-string';

import { heroes } from '../../data/heroes';
import { HeroesCard } from '../Heroes/HeroesCard';
import { UseForm } from '../../hooks/UseForm';
import { useLocation } from 'react-router-dom';
 
export const SearchScreen = ( { history } ) => {

    const location = useLocation(); 
    
    const { q = '' } =  queryString.parse( location.search );

    const heroesFiltered = heroes;
    const [  setValues, handleInpuntChange ] = UseForm( {
        searchText: q
    } );

    const { searchText } = setValues;

    const handleSearch = ( e) => {
        e.preventDefault();
        history.push(`?q=${searchText} `);
    }


    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>


            <div className="row">

                <div className="col-4" >
                    <h4> SearchForm </h4>
                    <hr/>

                    <form onSubmit={ handleSearch } >

                        <label> Find your Hero </label>
                        <input type="text"  placeholder="Hero"  className="form-control"  name="searchText"  value={searchText}  onChange={ handleInpuntChange } />

                        <button  type="submit" className="btn m-1 btn-block btn-outline-primary" >Search</button>

                    </form>

                </div>

                <div className="col-8" >

                    <h4>Results</h4>
                    <hr/>

                    {
                        heroesFiltered.map(
                            hero => ( <HeroesCard  key={ hero.id }  { ...hero } /> )
                        )
                    }
                    
                </div>

            </div>


        </div>
    )
}
