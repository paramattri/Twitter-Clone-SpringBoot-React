import { shallow } from 'enzyme';
import Widgets from './Widgets';
import { render, screen } from '@testing-library/react';

test('widgets', () => {
    const component = shallow(<Widgets/>);
    const insideComponent = component.find('.widgets')
    expect(insideComponent.length).toBe(1);
})

test('renders widgets api text', () => {
    render(<Widgets/>);
    const linkElement = screen.getByText(/what's happening/i);
    expect(linkElement).toBeInTheDocument();
});  
