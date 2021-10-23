import React from 'react';
import { mount } from 'enzyme';
import { HeroesScreen } from '../components/Heroes/HeroesScreen';
import { MemoryRouter, Route } from 'react-router-dom';

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


    test('Debe de mostrat un heroe si el parametro Existe y se encuentra', () => {

        const wrapper = mount(
            <MemoryRouter  initialEntries={ ['/hero/marvel-spider'] }>
                <Route path="/hero/:heroeid"  component={ HeroesScreen }></Route>
            </MemoryRouter>
        );


        expect( wrapper.find('div').exists() ).toBe(true);

    })
    
    

});