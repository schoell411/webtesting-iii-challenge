import React from 'react';
import { render, fireEvent } from '@testing-library/react';

//component to be tested
import Display from '../display/Display';

test('Display renders', () => {
    expect(render(<Display />)).toMatchSnapshot();
})

test('mock', () => {
    const mock = jest.fn();
    mock('test');
    expect(mock).toHaveBeenCalled();
})

test('displays closed state with red-led', () => {
    const {queryByText, getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
    queryByText(/red-led/i)
})