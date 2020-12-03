import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Footer from './components/Footer';

test('twitterFooter', () => {
    const component = shallow(<Footer/>)
    const insideComponent = component.find('.twitterFooter')
    expect(insideComponent.length).toBe(1)
})

test('footer renders all rights reserved', () => {
    render(<Footer/>)
    const linkElement = screen.getByText(/All Rights Reserved 2020 @Param/i);
    expect(linkElement).toBeInTheDocument();
})