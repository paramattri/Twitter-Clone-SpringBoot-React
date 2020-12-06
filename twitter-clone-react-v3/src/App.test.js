import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('app', () => {
  const component = shallow(<App/>);
  const insideComponent = component.find('.app')
  expect(insideComponent.length).toBe(1);
})