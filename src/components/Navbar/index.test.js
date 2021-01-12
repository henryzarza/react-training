import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthContext } from '@components/ProtectedRoute';
import Navbar from './index';

afterEach(cleanup);

describe('Navbar', () => {
  test('it renders well', () => {
    const { container } = render(
      <AuthContext.Provider value={{ handleSetIsAuth: jest.fn() }}>
        <Navbar />
      </AuthContext.Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it logout correct', async () => {
    const handleSetIsAuth = jest.fn();
  
    render(
      <AuthContext.Provider value={{handleSetIsAuth}}>
        <Navbar />
      </AuthContext.Provider>
    );

    userEvent.click(screen.getByRole('button', { name: 'NAVBAR:LOGOUT' }));

    expect(handleSetIsAuth).toHaveBeenCalledWith(false);
  });
});
