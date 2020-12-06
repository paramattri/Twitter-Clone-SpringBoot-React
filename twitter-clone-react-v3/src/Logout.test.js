import { shallow } from 'enzyme';
import Logout from './Logout';
import { render, screen } from '@testing-library/react';

test('logout', () => {
    const component = shallow(<Logout/>);
    const insideComponent = component.find('.logout')
    expect(insideComponent.length).toBe(1);
})

test('renders logout message', () => {
    render(<Logout/>);
    const linkElement = screen.getByText(/successfully logged out, thanks for your time!/i);
    expect(linkElement).toBeInTheDocument();
});  
