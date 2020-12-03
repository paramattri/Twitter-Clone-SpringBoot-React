import { shallow } from 'enzyme';
import UserFeed from './UserFeed';
import { render, screen } from '@testing-library/react';

test('userFeed', () => {
    const component = shallow(<UserFeed/>);
    const insideComponent = component.find('.userFeed')
    expect(insideComponent.length).toBe(1);
})

test('renders userFeed tweets', () => {
    render(<UserFeed/>);
    const linkElement = screen.getByText(/tweets/i);
    expect(linkElement).toBeInTheDocument();
});  
