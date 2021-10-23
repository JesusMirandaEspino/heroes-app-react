import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import { SearchScreen } from '../components/Search/SearchScreen';

describe( ' Pruebas con <SearchScreen /> ', () => {

    test('Debe de mostrarse con los valores por defecto correctamente ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] } >
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.textinfo' ).text().trim() ).toBe('Search a Hero');

    });


    test('debe de mostrar a Batman y el input con el valor del QueryString  ', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batman'] } >
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        );

            expect( wrapper.find('input').prop('value') ).toBe('batman');
            expect( wrapper ).toMatchSnapshot();

    });


    test('Debe mostrar un error si no encuntran al heroe ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batman123'] } >
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        );

            expect( wrapper.find('.textdanger').text().trim() ).toBe(`There is no a Hero batman123`);
            expect( wrapper ).toMatchSnapshot();    

    });
    

    test('Debe de llamar el PUSH del history ', () => {
        
        const history = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batman123'] } >
                <Route path='/search'  component={ () => <SearchScreen  history={ history } />} />
            </MemoryRouter>
        );

        wrapper.find('input').simulate( 'change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( history.push ).toHaveBeenCalledWith(`?q=batman `);

    });
    
    


});