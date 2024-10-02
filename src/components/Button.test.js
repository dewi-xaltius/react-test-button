import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('Button calls the onClick function when clicked', () => {
  // Arrange
  const onClickMock = jest.fn();
  const label = 'Click me';

  // Act
  render(<Button label={label} onClick={onClickMock} />);
  const button = screen.getByText(label);
  userEvent.click(button);

  // Assert
  expect(onClickMock).toHaveBeenCalled();
});