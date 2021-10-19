import { PrivateRouter } from '../routers/PrivateRouter.js';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';


describe( 'Pruebas en <PrivateRouter />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente si esta autenticado y guardar localstorage', () => {

            const wrapper = mount(
                <MemoryRouter>
                    <PrivateRouter isAuthenticated={ true }  component={ () => <span>Hola</span> }  { ...props } />
                </MemoryRouter>
                );

    expect( wrapper.find( 'span' ).exists() ).toBe( true );
    expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/marvel' );


    });

    
});