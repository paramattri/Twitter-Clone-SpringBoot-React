import { shallow } from 'enzyme';
import Login from './Login';

test('login', () => {
    const component = shallow(<Login/>);
    const insideComponent = component.find('.login')
    expect(insideComponent.length).toBe(1);
})