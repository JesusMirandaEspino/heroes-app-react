import { NavBar } from '../components/ui/NavBar';
import React from 'react';
import { mount } from 'enzyme';
import { authContext } from '../auth/authContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../types/types';
import '@testing-library/jest-dom';

describe( 'Pruebas con <NavBar />',  () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const constexValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Jesus'
        }
    }

    const wrapper = mount(

            <authContext.Provider value={ constexValue } >
                <MemoryRouter>
                    <Router history={ historyMock } >
                        <NavBar />
                    </Router>
                </MemoryRouter>
            </authContext.Provider> 
        );

    afterEach( () => {
        jest.clearAllMocks();
    } );

    test('Debe de mostrarlo correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.text-info' ).text().trim() ).toBe('Jesus');

    });

    test('Debe de llamar el logout y usar el history ', () => {

        wrapper.find('button').prop( 'onClick' )();

        expect( constexValue.dispatch ).toHaveBeenCalledWith({ 
            type: types.logout
        });

    });
    
    


});