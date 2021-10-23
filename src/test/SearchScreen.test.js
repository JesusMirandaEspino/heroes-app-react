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
    


});