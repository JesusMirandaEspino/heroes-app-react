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

    });


    test( 'Debe de regresar a la pantalla anterior con PUSH', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter  initialEntries={ ['/hero/marvel-spider'] }>
                <Route path="/hero/:heroeid"  component={  () => <HeroesScreen  history={ history } /> }></Route>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();

    });

    test('Debe de regresar a la pantalla anterior ', () => {
        
        const wrapper = mount(
            <MemoryRouter  initialEntries={ ['/hero/marvel-spider'] }>
                <Route path="/hero/:heroeid"  component={  () => <HeroesScreen  history={ history } /> }></Route>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.goBack ).toHaveBeenCalled();
        expect( history.push ).not.toHaveBeenCalled();


    });


    test('Debe de llamar al redirect si el hero no existe ', () => {
        const wrapper = mount(
            <MemoryRouter  initialEntries={ ['/hero/marvel-spider1256787154'] }>
                <Route path="/hero/:heroeid"  component={  () => <HeroesScreen  history={ history } /> }></Route>
            </MemoryRouter>
        );

            expect( wrapper.text() ).toBe('');


    });
    
    
    
    

});