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

test('displays open state with green-led', () => {
    const { queryByText, getByText } = render(<Display closed={false} />);
    getByText(/open/i);
    queryByText(/green-led/i)
})

test('displays unlocked state with green-led', () => {
    const { queryByText, getByText } = render(<Display locked={false} />);
    getByText(/unlocked/i);
    queryByText(/green-led/i)
})

