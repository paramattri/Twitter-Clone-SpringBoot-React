import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Home from './components/Home'

// test('home renders welcome to twitter', () => {
//     render(<Home/>)
//     const linkElement = screen.getByText(/welcome to twitter clone project!/i);
//     expect(linkElement).toBeInTheDocument();
// })

test('homePage', () => {
    const component = shallow(<Home/>)
    const insideComponent = component.find('.homePage')
    expect(insideComponent.length).toBe(1)
})