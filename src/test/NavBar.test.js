import { NavBar } from '../components/ui/NavBar';
import React from 'react';
import { mount } from 'enzyme';
import { authContext } from '../auth/authContext';
import { AppRouter } from '../routers/AppRouter';
import { MemoryRouter } from 'react-router-dom';

describe( 'Pruebas con <NavBar />',  () => {

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
                    <NavBar />
                </MemoryRouter>
            </authContext.Provider> 
        );

    test('Debe de mostrarlo correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.text-info' ).text().trim() ).toBe('Jesus');
    });
    


});