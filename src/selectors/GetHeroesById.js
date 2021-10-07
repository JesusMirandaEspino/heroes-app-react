import { heroes } from '../data/heroes';

export const GetHeroesByPublisher = ( id ) => {

    return heroes.find( hero => hero.id === id );

}
