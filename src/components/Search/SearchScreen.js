import React from 'react'
import { heroes } from '../../data/heroes';
import { HeroesCard } from '../Heroes/HeroesCard';

export const SearchScreen = () => {

    const heroesFiltered = heroes;


    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>


            <div className="row">

                <div className="col-4" >
                    <h4> SearchForm </h4>
                    <hr/>

                    <form>

                        <label> Find your Hero </label>
                        <input type="text"  placeholder="Hero"  className="form-control" />

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
