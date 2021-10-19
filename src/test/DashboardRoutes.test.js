
import { DashboardRoutes } from '../routers/DashboardRoutes';
import { authContext } from '../auth/authContext';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe( 'Pruebas con <DashboardRoutes />', () => {

    test(' Debe de mostrase correctamente', () => {

        const constexValue = {
            dispatch: jest.fn(),
            user: {
                logged: false,
            }
        }

        const wrapper = mount(
            <authContext.Provider value={ constexValue } >
                <MemoryRouter>
                    <DashboardRoutes  />
                </MemoryRouter>
            </authContext.Provider>

        );

        expect( wrapper ).toMatchSnapshot();

    });



});