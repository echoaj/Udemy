import { render, screen } from '@testing-library/react';
import App from './App';

test('if Flipper gets rendered', () => {
    render(<App />);
    const flipperElement = screen.getByTestId("flipper");
    expect(flipperElement).toBeInTheDocument();
});
