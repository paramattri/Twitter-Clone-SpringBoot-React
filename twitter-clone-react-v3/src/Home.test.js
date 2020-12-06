import { shallow } from 'enzyme';
import Home from './Home';

test('home', () => {
    const component = shallow(<Home/>);
    const insideComponent = component.find('.home')
    expect(insideComponent.length).toBe(1);
  })