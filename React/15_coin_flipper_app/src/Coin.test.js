import { render, screen } from '@testing-library/react';
import Coin from './Coin';

test('if Coint-img source image is tails when this.props.side is tails', () => {
    render(<Coin side="tails" />);
    const imgElement = screen.getByAltText("penny");
    expect(imgElement.src).toBe("https://coins.thefuntimesguide.com/files/lincoln-memorial-cent-1.png");
});


test('if Coint-img source image is heads when this.props.side is heads', () => {
    render(<Coin side="heads" />);
    const imgElement = screen.getByAltText("penny");
    expect(imgElement.src).toBe("https://4.bp.blogspot.com/-7PwEP2RUkJY/UcsufEDWr5I/AAAAAAAADD4/1aoajpaTluw/s1600/2010_cent_obverse.png");
});


test('if Coint-img is being rendered', () => {
    render(<Coin side="heads" />);
    const imgElement = screen.getByAltText("penny");
    expect(imgElement).toBeInTheDocument();
});


test('if displayType is none when this.props.enable is null', () => {
    render(<Coin side="heads" enable={null} />);
    let divElement = screen.getByTestId("Coin");
    expect(divElement.style.display).toBe("none");
});


test('if displayType is not none when this.props.enable is not null', () => {
    render(<Coin side="heads" enable="heads" />);
    let divElement = screen.getByTestId("Coin");
    expect(divElement.style.display).not.toBe("none");
});
