import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

test('Button calls the onClick function when clicked', () => {
  // Arrange
  const onClickMock = jest.fn();
  const label = 'Click me';

  // Act
  render(<Button label={label} onClick={onClickMock} />);
  const button = screen.getByText(label);
  fireEvent.click(button);

  // Assert
  expect(onClickMock).toHaveBeenCalled();
});
