import React from 'react';
import { render, fireEvent } from '@testing-library/react';

//component to be tested
import Controls from './Controls';

test('Controls render', () => {
  expect(render(<Controls />)).toMatchSnapshot();
})

test('toggleClosed', () => {
  const toggleClosedMock = jest.fn();
  const { getByText } = render(<Controls toggleClosed={toggleClosedMock} />);
  const toggleButton = getByText(/close gate/i);
  fireEvent.click(toggleButton);
  expect(toggleClosedMock).toHaveBeenCalled();
  expect(toggleClosedMock).toHaveBeenCalledTimes(1);
})

test('toggleLocked', () => {
  const toggleLockedMock = jest.fn();
  const { getByText } = render(<Controls closed={true} toggleLocked={toggleLockedMock} />);
  const toggleButton = getByText(/lock gate/i);
  fireEvent.click(toggleButton);
  expect(toggleLockedMock).toHaveBeenCalled();
  expect(toggleLockedMock).toHaveBeenCalledTimes(1);
})

test('toggleClosed disabled when gate is locked', () => {
  const { getByText } = render(<Controls locked={true} closed={true} />);
  const toggleButton = getByText(/open gate/i);
  expect(toggleButton.disabled).toEqual(true);
})

test('toggleLock button disabled when gate is open', () => {
  const { getByText } = render(<Controls />);
  const toggleButton = getByText(/lock gate/i);
  expect(toggleButton.disabled).toEqual(true);
})