import React from 'react';
import { render } from '@testing-library/react';

//component to be tested
import Dashboard from '../dashboard/Dashboard';

test('Display renders', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})