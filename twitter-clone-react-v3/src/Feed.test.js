import { shallow } from 'enzyme';
import Feed from './Feed';
import { render, screen } from '@testing-library/react';

test('feed', () => {
    const component = shallow(<Feed/>);
    const insideComponent = component.find('.feed')
    expect(insideComponent.length).toBe(1);
  })

test('renders feed Home text', () => {
  render(<Feed/>);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});  