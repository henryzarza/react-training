import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { ERROR_MESSAGES } from '@constants/errorMessages';
import { AuthContext } from '@components/ProtectedRoute';
import LoginForm from './index';

afterEach(cleanup);

describe('LoginForm', () => {
  test('it renders well', () => {
    render(<LoginForm className="test" onChangeView={jest.fn()} />);

    expect(screen.getByLabelText('LOGIN:EMAIL')).toBeInTheDocument();
    expect(screen.getByLabelText('LOGIN:PASSWORD')).toBeInTheDocument();
    expect(screen.getByText('LOGIN:TITLE')).toBeInTheDocument();
    expect(screen.getByText('LOGIN:SUBTITLE')).toBeInTheDocument();
  });

  test('it shows errors messages', async () => {
    render(<LoginForm className="test" onChangeView={jest.fn()} />);

    userEvent.click(screen.getByRole('button', { name: 'LOGIN:BTN_LOGIN' }));

    expect(await screen.findAllByText(ERROR_MESSAGES.required)).toHaveLength(2);
  });

  test('it shows email and password error message', async () => {
    render(<LoginForm className="test" onChangeView={jest.fn()} />);
    act(() => {
      userEvent.type(screen.getByLabelText('LOGIN:EMAIL'), 'test@email');
      userEvent.type(screen.getByLabelText('LOGIN:PASSWORD'), 'qwertyqwerty');
    });
  
    userEvent.click(screen.getByRole('button', { name: 'LOGIN:BTN_LOGIN' }));

    expect(await screen.findByText(ERROR_MESSAGES.email)).toBeTruthy();
    expect(await screen.findByText(ERROR_MESSAGES.password)).toBeTruthy();
  });

  test('it logins with correct credentials', async () => {
    const handleSetIsAuth = jest.fn();
  
    render(
      <AuthContext.Provider value={{handleSetIsAuth}}>
        <LoginForm className="test" onChangeView={jest.fn()} />
      </AuthContext.Provider>
    );
  
    act(() => {
      userEvent.type(screen.getByLabelText('LOGIN:EMAIL'), 'test@email.io');
      userEvent.type(screen.getByLabelText('LOGIN:PASSWORD'), 'Qwerty123456');
    });

    userEvent.click(screen.getByRole('button', { name: 'LOGIN:BTN_LOGIN' }));

    expect(await screen.findByText('LOGIN:BTN_LOGIN')).toBeInTheDocument();
    expect(handleSetIsAuth).toHaveBeenCalledWith(true);
  });
});
