import { render, screen } from '@testing-library/react';
import Flipper from './Flipper';


test('if Flipper gets rendered', () => {
    render(<Flipper />);
    const flipperElement = screen.getByTestId("flipperdiv");
    expect(flipperElement).toBeInTheDocument();
});

// clear cache ./node_modules/.bin/jest --clearCache

test("if flipCoin() function returns an integer", () => {
    render(<Flipper />);
    let flipperElement = screen.getByTestId("flipperdiv");
    let flipButton = flipperElement.querySelector("button");
    flipButton.click();
    let result = flipperElement.querySelector("p").textContent;
    expect(["1 Flips | 0 Heads | 1 tails", "1 Flips | 1 Heads | 0 tails"]).toContain(result);
});
