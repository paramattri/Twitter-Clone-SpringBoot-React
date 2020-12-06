import { shallow } from 'enzyme';
import Registration from './Registration';

test('registration', () => {
    const component = shallow(<Registration/>);
    const insideComponent = component.find('.registration')
    expect(insideComponent.length).toBe(1);
})