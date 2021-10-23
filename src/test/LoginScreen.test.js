import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../components/login/LoginScreen';
import { authContext } from '../auth/authContext';
import { types } from '../types/types';

describe( 'Pruebas con el <LoginScreen />', () => {

        const history = {
            replace: jest.fn()
        }

    const constexValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

        const wrapper = mount(
            <authContext.Provider value={ constexValue } >
                <LoginScreen history={ history } />
            </authContext.Provider>
        );


    test('Debe de mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de realizar el dispatch y la navegacion ', () => {
        
        const handleClick = wrapper.find( 'button' ).prop('onClick');

        handleClick();

        expect( constexValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Jesus'
            }
        });

        expect( history.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem( 'lastPath', '/dc' );

        handleClick();

        expect( history.replace ).toHaveBeenCalledWith('/dc');

    });


    


});