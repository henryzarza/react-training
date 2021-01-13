import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';

import { server } from '@mocks/server';
import { setupIntersectionObserverMock } from '@mocks/intersectionObserver';
import { client } from '@config/apollo-client';

import Interesting from './index';

beforeAll(() => {
  server.listen();

  const observeMock = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };

  setupIntersectionObserverMock(observeMock);
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const customRender = (ui) =>
  render(
    <ApolloProvider client={client}>
      {ui}
    </ApolloProvider>
  );

describe('Coin', () => {

  test('it shows loading', () => {
    customRender(<Interesting />);

    expect(screen.getByText('HOME:LOADING')).toBeInTheDocument();
  });

  test.skip('it renders and gets the data well', async () => {
    customRender(<Interesting />);

    expect(await screen.findByText('Afghan afghani')).toBeInTheDocument();
  });

  test.todo('it selects a specific field and shows the data');

  test.todo('lazy loading works');
});
