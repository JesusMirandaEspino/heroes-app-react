import { PrivateRouter } from '../routers/PrivateRouter.js';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';


describe( 'Pruebas en <PrivateRouter />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    test('Debe de mostrar el componente si esta autenticado y guardar localstorage', () => {

            const wrapper = shallow( 
                <MemoryRouter>
                    <PrivateRouter isAuthenticated={ true }  component={ () => <span>Hola</span> }  { ...props } /> 
                </MemoryRouter>
                );

        console.log( wrapper.html() );

    });


});