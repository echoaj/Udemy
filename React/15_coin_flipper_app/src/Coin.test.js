import { render, screen } from '@testing-library/react';
import Coin from './Coin';

test('if Coint-img source image is tails when this.props.side is tails', () => {
    render(<Coin side="tails" />);
    const imgElement = screen.getByAltText("penny");
    expect(imgElement).toBeInTheDocument();
});
