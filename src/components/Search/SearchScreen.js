import React, { useMemo } from 'react'
import queryString from 'query-string';

import { HeroesCard } from '../Heroes/HeroesCard';
import { UseForm } from '../../hooks/UseForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
 
export const SearchScreen = ( { history } ) => {

    const location = useLocation(); 
    
    const { q = '' } =  queryString.parse( location.search );

    
    const [  setValues, handleInpuntChange ] = UseForm( {
        searchText: q
    } );

    const { searchText } = setValues;

    const heroesFiltered = useMemo( () =>  getHeroesByName( q ), [q]  );

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
                        ( q === '' )  && 
                            <div className="alert alert-info" >
                                <p> Search a Hero </p>
                            </div> 
                    }

                    { 
                        ( q !== ''  && heroesFiltered.length === 0 )  && 
                            <div className="alert alert-danger" >
                                <p> There is no a Hero { q } </p>
                            </div> 
                    }

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
