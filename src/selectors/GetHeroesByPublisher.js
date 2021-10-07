import { heroes } from '../data/heroes';

export const GetHeroesByPublisher = ( publisher ) => {

    const validPublisher = [ 'DC Comics', 'Marvel Comics' ];

    if( !validPublisher.includes( publisher ) ){
        throw new Error( `Publisher ${ publisher } No es correcto` );
    }

    return heroes.filter( hero => hero.publisher === publisher );

}
