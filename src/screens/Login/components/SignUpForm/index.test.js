import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { ERROR_MESSAGES } from '@constants/errorMessages';
import { AuthContext } from '@components/ProtectedRoute';
import SignUpForm from './index';

afterEach(cleanup);

describe('SignUpForm', () => {
  test('it renders well', () => {
    render(<SignUpForm className="test" onChangeView={jest.fn()} />);

    expect(screen.getByLabelText('LOGIN:EMAIL')).toBeInTheDocument();
    expect(screen.getByLabelText('LOGIN:PASSWORD')).toBeInTheDocument();
    expect(screen.getByText('LOGIN:TITLE')).toBeInTheDocument();
    expect(screen.getByText('LOGIN:BTN_SIGN_IN')).toBeInTheDocument();
  });

  test('it shows errors messages', async () => {
    render(<SignUpForm className="test" onChangeView={jest.fn()} />);

    userEvent.click(screen.getByRole('button', { name: 'LOGIN:BTN_SIGN_IN' }));

    expect(await screen.findAllByText(ERROR_MESSAGES.required)).toHaveLength(5);
  });

  test('it shows email and password error message', async () => {
    render(<SignUpForm className="test" onChangeView={jest.fn()} />);
    act(() => {
      userEvent.type(screen.getByLabelText('LOGIN:EMAIL'), 'test@email');
      userEvent.type(screen.getByLabelText('LOGIN:PASSWORD'), 'qwertyqwerty');
    });
  
    userEvent.click(screen.getByRole('button', { name: 'LOGIN:BTN_SIGN_IN' }));

    expect(await screen.findByText(ERROR_MESSAGES.email)).toBeInTheDocument();
    expect(await screen.findByText(ERROR_MESSAGES.password)).toBeInTheDocument();
  });

  test('it logins when fill all the fields', async () => {
    const handleSetIsAuth = jest.fn();
  
    render(
      <AuthContext.Provider value={{handleSetIsAuth}}>
        <SignUpForm className="test" onChangeView={jest.fn()} />
      </AuthContext.Provider>
    );
  
    act(() => {
      userEvent.type(screen.getByLabelText('LOGIN:NAME'), 'test');
      userEvent.type(screen.getByLabelText('LOGIN:USER_NAME'), 'test');
      userEvent.type(screen.getByLabelText('LOGIN:EMAIL'), 'test@email.io');
      userEvent.type(screen.getByLabelText('LOGIN:PASSWORD'), 'Qwerty123456');
      userEvent.type(screen.getByLabelText('LOGIN:PASSWORD_REPEAT'), 'Qwerty123456');
    });

    userEvent.click(screen.getByRole('button', { name: 'LOGIN:BTN_SIGN_IN' }));

    expect(await screen.findByText('LOGIN:BTN_SIGN_IN')).toBeInTheDocument();
    expect(handleSetIsAuth).toHaveBeenCalledWith(true);
  });

  test('it change of screen to login form', async () => {
    const changeView = jest.fn();
    render(<SignUpForm className="test" onChangeView={changeView} />);

    userEvent.click(screen.getByRole('button', { name: 'LOGIN:LINK_LOGIN' }));

    expect(changeView).toHaveBeenCalled();
  });
});
