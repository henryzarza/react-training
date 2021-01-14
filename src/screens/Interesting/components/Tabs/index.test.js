import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tabs from './index';
import { TABS_CONFIG } from '../../constants';

afterEach(cleanup);

describe('Tab', () => {
  test('it renders well', async () => {
    render(<Tabs value={TABS_CONFIG[0].id} onSelected={jest.fn()} />);
    
    expect(await screen.findAllByRole('button')).toHaveLength(TABS_CONFIG.length);
  });

  test('it selects a specific field', () => {
    const handleSelect = jest.fn();
    render(<Tabs value={TABS_CONFIG[0].id} onSelected={handleSelect} />);

    userEvent.click(screen.getByRole('button', { name: TABS_CONFIG[1].text }));

    expect(handleSelect).toHaveBeenCalledWith(TABS_CONFIG[1].id);
  });
});
