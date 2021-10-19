import React from 'react';
import { AppRouter } from '../routers/AppRouter';
import { mount } from 'enzyme';
import { authContext } from '../auth/authContext';

describe( 'Pruebas con <AppRouter />', () => {

    const constexValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test(' Debe de mostar login si no esta autenticado ', () => {
        const wrapper = mount(
            <authContext.Provider value={ constexValue } >
                <AppRouter />
            </authContext.Provider>
        );

            expect( wrapper ).toMatchSnapshot();
    });


    test(' Debe de mostrar el componente de marvel si esta autenticado ', () => {

        const constexValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Jesus'
            }
        }

            const wrapper = mount(
                <authContext.Provider value={ constexValue } >
                    <AppRouter />
                </authContext.Provider>
            );

            expect( wrapper.find( '.navbar' ).exists() ).toBe( true );

    });
    

});