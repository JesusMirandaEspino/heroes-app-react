import React from 'react';
import { mount } from 'enzyme';
import { HeroesScreen } from '../components/Heroes/HeroesScreen';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas con <HeroesScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };


    const wrapper = mount(
        <MemoryRouter  initialEntries={ ['/hero'] }>
            <HeroesScreen history={ history } /> );
        </MemoryRouter>
    );

    test('Debe de mostrarse el componente si no hay argumentos en el URL ', () => {
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    });

});